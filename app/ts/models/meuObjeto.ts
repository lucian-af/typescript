import { Igualavel, Impressao } from "./index";

export interface MeuObjeto<T> extends Impressao, Igualavel<T> {

}