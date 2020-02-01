import { Imprimivel } from "./Imprimivel";

export class Negociacao implements Imprimivel {
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
}

enum DiasDaSemana {
    DOMINGO,
    SABADO = 6
}