export abstract class View<T> {
  private _elemento: JQuery;

  constructor(seletor: string) {
    this._elemento = $(seletor);
  }

  atualizar(modelo: T) {
    this._elemento.html(this.template(modelo));
  }

  abstract template(modelo: T): string;
}
