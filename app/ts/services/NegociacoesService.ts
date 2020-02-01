import { Negociacao, NegociacaoParcial } from "../models/index";

export class NegociacoesService {

    getNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")
                .then(res => handler(res))
                .then(res => res.json())
                .then((dados: NegociacaoParcial[]) => 
                    dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
                .catch(err => {
                    console.log(err.message);
                    return [];
                });
    }
}

interface HandlerFunction {
    (response: Response): Response;
}