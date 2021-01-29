import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao } from "../models/index";
import { delay, domInject, imprimir } from "../helpers/index";
import { NegociacaoService } from "../services/index";

let timer = 0;
export class NegociacaoController {

  @domInject("#data")
  private _inputData: JQuery;

  @domInject("#quantidade")
  private _inputQuantidade: JQuery;

  @domInject("#valor")
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");
  private _negociacaoService = new NegociacaoService();

  // Essse comentario não existe após o processo de compilação
  constructor() {
    this._negociacoesView.atualizar(this._negociacoes);
  }

  @delay()
  adicionar(): void {

    let data = new Date(this._inputData.val().replace(/-/g, ","));

    if (!this._ehDiaUtil(data)) {
      this._mensagemView.atualizar(
        "Somente negociações em dias úteis, por favor!"
      );
      return;
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adicionar(negociacao);

    imprimir(negociacao, this._negociacoes);
    this._negociacoesView.atualizar(this._negociacoes);
    this._mensagemView.atualizar("Negociação adicionada com sucesso!");
  }

  private _ehDiaUtil(data: Date) {
    return (
      data.getDay() != eDiaDaSemana.Sabado &&
      data.getDay() != eDiaDaSemana.Domingo
    );
  }

  @delay(1000)
  async importarDados() {

    try {
      const negociacoes = await this._negociacaoService.obterNegociacoes(
        res => {
          if (res.ok) return res;
          throw new Error(res.statusText);
        });

      const negociacoesImportadas = this._negociacoes.paraArray();
      negociacoes
        .filter(negociacao => !negociacoesImportadas.some(importada => negociacao.ehIgual(importada)))
        .forEach(negociacao => this._negociacoes.adicionar(negociacao));

      this._negociacoesView.atualizar(this._negociacoes);
      
    } catch (err) {
      this._mensagemView.atualizar(err.message);
    }
  }
}



enum eDiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}
