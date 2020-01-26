class NegociacoesView extends AbstractView<Negociacoes> {
    
    protected template(negociacoes: Negociacoes): string {
        return negociacoes.toArray().map(negociacao => 
            `
                <tr>
                    <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
            `
        ).join("");
    }
}