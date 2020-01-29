import { Negociacoes } from "../models/Negociacoes";
import { AbstractView } from "./AbstractView";

/**
 * Template com o conteúdo da tabela de negociações
 */
export class NegociacoesView extends AbstractView<Negociacoes> {
    
    protected template(negociacoes: Negociacoes): string {
        return `   
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${negociacoes.toArray().map(negociacao =>
                        `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                        `
                        ).join("")}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
            <script>console.log("script to escape");</script>
            `;
    }
}