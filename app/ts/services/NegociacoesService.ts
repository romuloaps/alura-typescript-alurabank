import { Negociacao, NegociacaoParcial } from "../models/index";

export class NegociacoesService {

    getNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dadoss")
                .then(res => handler(res))
                .then(res => res.json())
                .then((dados: NegociacaoParcial[]) => 
                    dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
                .catch(err => {
                    console.log(err);
                    throw new Error(err.message);
                });
    }
}

interface HandlerFunction {
    (response: Response): Response;
}