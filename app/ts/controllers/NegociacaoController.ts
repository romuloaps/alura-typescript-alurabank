import { Negociacoes, Negociacao } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";

export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoes-view");
    private _mensagemView = new MensagemView("#mensagem-box");

    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");

        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void {
        event.preventDefault();

        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ",")),
                                        parseInt(this._inputQuantidade.value),
                                        parseFloat(this._inputValor.value)
                                );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação inserida com sucesso!");
    }
}