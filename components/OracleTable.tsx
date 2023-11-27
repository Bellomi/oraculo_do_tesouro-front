"use client";

import { MarketProps } from "@/types";
import { useState } from "react";

interface OracleTableProps {
  market: MarketProps;
}

const OracleTable = ({ market }: OracleTableProps) => {
  const { exchange_id, exchange_name, quotes, trust_score, last_updated } =
    market;

  const usdQuote = quotes.USD;
  const formattedDate = new Date(last_updated).toLocaleString();

  return (
    <div className="flex mx-10 justify-between items-center flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <table className="shadow-lg bg-white">
            <tbody>
              <tr>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Oráculo
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Preço
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Data da Atualizaçao
                </th>
              </tr>
              <tr>
                <td className="border px-8 py-4 font-bold">
                  {market.exchange_name}
                </td>
                <td className="border px-8 py-4">
                  {market.base_currency_name}
                </td>
                <td className="border px-8 py-4">{formattedDate} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OracleTable;
