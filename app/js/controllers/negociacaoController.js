System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, eDiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView("#negociacoesView");
                    this._mensagemView = new index_1.MensagemView("#mensagemView");
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacoesView.atualizar(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ","));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.atualizar("Somente negociações em dias úteis, por favor!");
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoesView.atualizar(this._negociacoes);
                    this._mensagemView.atualizar("Negociação adicionada com sucesso!");
                }
                _ehDiaUtil(data) {
                    return (data.getDay() != eDiaDaSemana.Sabado &&
                        data.getDay() != eDiaDaSemana.Domingo);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (eDiaDaSemana) {
                eDiaDaSemana[eDiaDaSemana["Domingo"] = 0] = "Domingo";
                eDiaDaSemana[eDiaDaSemana["Segunda"] = 1] = "Segunda";
                eDiaDaSemana[eDiaDaSemana["Terca"] = 2] = "Terca";
                eDiaDaSemana[eDiaDaSemana["Quarta"] = 3] = "Quarta";
                eDiaDaSemana[eDiaDaSemana["Quinta"] = 4] = "Quinta";
                eDiaDaSemana[eDiaDaSemana["Sexta"] = 5] = "Sexta";
                eDiaDaSemana[eDiaDaSemana["Sabado"] = 6] = "Sabado";
            })(eDiaDaSemana || (eDiaDaSemana = {}));
        }
    };
});
