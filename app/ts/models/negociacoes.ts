import { Negociacao } from "./negociacao";

export class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  adicionar(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return [].concat(this._negociacoes);
  }
}