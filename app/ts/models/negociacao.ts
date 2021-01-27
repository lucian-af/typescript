export class Negociacao {
  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  get volume() {
    return this.quantidade * this.valor;
  }
}
