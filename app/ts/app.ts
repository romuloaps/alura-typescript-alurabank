import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();

const form: HTMLFormElement = <HTMLFormElement> document.querySelector(".form");
const buttonImportar: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#button-importar");

if (form) form.addEventListener("submit", controller.adiciona.bind(controller));
if (buttonImportar) buttonImportar.addEventListener("click", controller.importaDados.bind(controller));