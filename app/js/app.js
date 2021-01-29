System.register(["./controllers/negociacaoController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var negociacaoController_1, controller;
    return {
        setters: [
            function (negociacaoController_1_1) {
                negociacaoController_1 = negociacaoController_1_1;
            }
        ],
        execute: function () {
            controller = new negociacaoController_1.NegociacaoController();
            $(".form").submit(controller.adicionar.bind(controller));
            $("#botao-importa").click(controller.importarDados.bind(controller));
        }
    };
});
