class MensagemView extends AbstractView<string> {
    
    protected template(mensagem: string): string {
        return `<p class="alert alert-success">${mensagem}</p>`;
    }
}