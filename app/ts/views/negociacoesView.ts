import { Negociacoes } from "../models/negociacoes";
import { View } from "./view";

export class NegociacoesView extends View<Negociacoes> {
  template(modelo: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
        <thead>
        <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
            </tr>
            </thead>

        <tbody>
            ${modelo
              .paraArray()
              .map(
                (negociacao) =>
                  `
                    <tr>
                        <td>${negociacao.data.getDate()}/
                        ${negociacao.data.getMonth() + 1}/ 
                        ${negociacao.data.getFullYear()}
                        </td>
                        <td>${negociacao.quantidade.toFixed(3)}</td>
                        <td>${negociacao.valor.toFixed(2)}</td>
                        <td>${negociacao.volume.toFixed(2)}</td>
                    </tr>
                    `
              )
              .join("")}
              </tbody>

        <tfoot>
        </tfoot>

        </table>
      `;
  }
}
