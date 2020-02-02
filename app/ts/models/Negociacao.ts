import { AluraBankObject } from "./AluraBankObject";

export class Negociacao implements AluraBankObject<Negociacao> {
    /**
     * Uso da palavra-chave readonly para transformar os parâmetros em properties "get"
     * @param data 
     * @param quantidade 
     * @param valor 
     */
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {
        return this.quantidade * this.valor;
    }

    emDiaUtil(): boolean {
        return this.data.getDay() != DiasDaSemana.SABADO && this.data.getDay() != DiasDaSemana.DOMINGO;
    }

    printToString(): void {
        console.log(JSON.stringify(this));
    }

    isIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear()
            && this.quantidade == negociacao.quantidade
            && this.valor == negociacao.valor;
    }
}

enum DiasDaSemana {
    DOMINGO,
    SABADO = 6
}