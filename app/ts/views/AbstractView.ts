import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class AbstractView<T> {
    
    private _elemento: JQuery;

    constructor(selector: string, private _escape: boolean = false) {
        this._elemento = $(selector);
    }

    @logarTempoDeExecucao()
    update(model: T): void {
        let template = this.template(model);
        if (this._escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }

        this._elemento.html(template);
    }

    protected abstract template(model: T): string;
}