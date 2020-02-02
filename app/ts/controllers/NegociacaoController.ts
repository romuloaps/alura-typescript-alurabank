import { Negociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegociacoesService } from "../services/index";
import { print } from "../helpers/Utils";

export class NegociacaoController {

    @domInject("#data")
    private _inputData: HTMLInputElement;
    @domInject("#quantidade")
    private _inputQuantidade: HTMLInputElement;
    @domInject("#valor")
    private _inputValor: HTMLInputElement;

    private _negociacoes = new Negociacoes();
    private _service = new NegociacoesService();
    private _negociacoesView = new NegociacoesView("#negociacoes-view", true);
    private _mensagemView = new MensagemView("#mensagem-box");

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona(event: Event): void {
        event.preventDefault();

        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ",")),
                                        parseInt(this._inputQuantidade.value),
                                        parseFloat(this._inputValor.value)
                                );

        if (!negociacao.emDiaUtil()) {
            this._mensagemView.error("Negociação só permitida em dias úteis!");
            return;
        }

        this._negociacoes.adiciona(negociacao);
        print(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.success("Negociação inserida com sucesso!");
    }

    @throttle()
    importaDados(event: Event): void {

        this._service
            .getNegociacoes((res: Response) => {
                if (res.ok) {
                    return res;
                } else {
                    throw new Error("Ocorreu um erro! Não foi possível importar as negociações.");
                }
            })
            .then(negociacoesParaImportar => {

                const negociacoesJaImportadas = this._negociacoes.toArray();

                negociacoesParaImportar
                    .filter(negociacao => !this._negociacoes.existe(negociacao))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._negociacoesView.update(this._negociacoes);
            })
            .catch(error => this._mensagemView.error(error.message));
    }
}