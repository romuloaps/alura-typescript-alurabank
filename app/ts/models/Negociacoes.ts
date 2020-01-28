class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    toArray(): Negociacao[] {
        return this._negociacoes.slice();
    }
}