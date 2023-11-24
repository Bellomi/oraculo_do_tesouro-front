// const url = "https://coinpaprika1.p.rapidapi.com/coins/btc-bitcoin/markets";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "70acb6be8bmsh949c8c6fbd57f69p138438jsn81b0dfd983a9",
//     "X-RapidAPI-Host": "coinpaprika1.p.rapidapi.com",
//   },
// };

import { FilterProps } from "@/types";

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

export async function fetchCoins(filters: FilterProps) {
  const { institution, limit } = filters;
  const headers = {
    "X-RapidAPI-Key": "70acb6be8bmsh949c8c6fbd57f69p138438jsn81b0dfd983a9",
    "X-RapidAPI-Host": "coinpaprika1.p.rapidapi.com",
  };

  const response = await fetch(
    `https://coinpaprika1.p.rapidapi.com/coins/btc-bitcoin/markets?make=${institution}&limit=${limit}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
