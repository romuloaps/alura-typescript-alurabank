export abstract class AbstractView<T> {
    
    private _elemento: JQuery;

    constructor(selector: string, private _escape?: boolean) {
        this._elemento = $(selector);
    }

    update(model: T): void {
        let template = this.template(model);
        if (this._escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }

        this._elemento.html(template);
    }

    protected abstract template(model: T): string;
}