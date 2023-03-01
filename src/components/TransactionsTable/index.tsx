import React from "react";
import { Container } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.000</td>
            <td>Casa</td>
            <td>05/03/2023</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="deposit">R$1.000</td>
            <td>Casa</td>
            <td>05/03/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
