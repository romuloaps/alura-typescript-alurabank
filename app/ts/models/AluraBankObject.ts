import { Imprimivel } from "./Imprimivel";
import { Igualavel } from "./Igualavel";

export interface AluraBankObject<T> extends Imprimivel, Igualavel<T> {

}