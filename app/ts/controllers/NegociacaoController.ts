import { Negociacoes, Negociacao } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";
import { domInject } from "../helpers/decorators/index";

export class NegociacaoController {

    @domInject("#data")
    private _inputData: HTMLInputElement;
    @domInject("#quantidade")
    private _inputQuantidade: HTMLInputElement;
    @domInject("#valor")
    private _inputValor: HTMLInputElement;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoes-view", true);
    private _mensagemView = new MensagemView("#mensagem-box");

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

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
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.success("Negociação inserida com sucesso!");
    }
}