import { Impressao } from "../models/index";

export function imprimir(...objetos: Impressao[]) {
    objetos.forEach(objeto => objeto.paraTexto());
}