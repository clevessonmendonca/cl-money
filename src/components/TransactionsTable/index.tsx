import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

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
