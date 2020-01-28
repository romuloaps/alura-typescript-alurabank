export abstract class AbstractView<T> {
    
    private _elemento: JQuery;

    constructor(selector: string) {
        this._elemento = $(selector);
    }

    update(model: T): void {
        this._elemento.html(this.template(model));
    }

    protected abstract template(model: T): string;
}