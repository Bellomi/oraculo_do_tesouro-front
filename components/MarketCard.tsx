import { useState } from "react";
import Image from "next/image";
import { MarketProps } from "@/types";
import CustomButton from "./CustomButton";
import { FcApproval } from "react-icons/fc";

interface MarketCardProps {
  market: MarketProps;
}

const MarketCard = ({ market }: MarketCardProps) => {
  const {
    exchange_id,
    exchange_name,
    pair,
    base_currency_name,
    adjusted_volume_24h_share,
    quotes,
    trust_score,
    last_updated,
  } = market;

  const usdQuote = quotes.USD;
  const formattedDate = new Date(last_updated).toLocaleString();

  return (
    <div className="market-card group bg-slate-50 ">
      <div className="flex flex-col">
        <h2 className="market-card__content-title">{exchange_name}</h2>
        <h3 className="market-card__price">${usdQuote.price}</h3>
        <div className="flex mt-4 flex-row">
          <FcApproval className="mt-2 mr-2" />
          <p className="text-xs font-bold mt-2">
            Ultima Atualizaçao: {formattedDate}{" "}
          </p>
        </div>
        <div className="relative w-full h-10 my-3 object-contain"></div>
      </div>
    </div>
  );
};

export default MarketCard;
