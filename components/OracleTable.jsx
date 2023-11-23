import React from "react";
import Searchbar from "./Searchbar";
import CoinList from "./CoinsList";

export default function OracleTable({ coinsData }) {
  console.log(coinsData);

  return (
    <div>
      {Array.isArray(coinsData) && coinsData.length > 0 ? (
        <CoinList coinsData={coinsData} />
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );

    const coinsData = await res.json();

    return {
      props: {
        coinsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        coinsData: [],
      },
    };
  }
}
