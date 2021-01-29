System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoExecucao(segundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = "ms";
                let divisor = 1;
                if (segundos) {
                    unidade = "s";
                    divisor = 100;
                }
                console.log("----------------------");
                console.log(`parâmetos passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`O retorno do método é ${propertyKey} é ${JSON.stringify(retorno)}`);
                console.log(`O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoExecucao", logarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
