import { AbstractView } from "./AbstractView";

export class MensagemView extends AbstractView<string> {

    private _level: LogLevel
    
    protected template(mensagem: string): string {
        return `<p class="alert alert-${this._level}">${mensagem}</p>`;
    }

    success(model: string): void {
        this._level = LogLevel.SUCCESS;
        this.update(model);
    }

    error(model: string): void {
        this._level = LogLevel.ERROR;
        this.update(model);
    }
}

enum LogLevel {
    SUCCESS = "success",
    ERROR = "danger"
}