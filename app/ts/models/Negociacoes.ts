import { Negociacao } from "./Negociacao";
import { Imprimivel } from "./Imprimivel";

export class Negociacoes implements Imprimivel {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    toArray(): Negociacao[] {
        return this._negociacoes.slice();
    }

    printToString(): void {
        console.log(JSON.stringify(this._negociacoes));
    }
}