"use client";

import { useState, useEffect } from "react";

type coin = {
  "24hVolume": string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  contractAddresses: [];
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: [];
  symbol: string;
  tier: number;
  uuid: string;
};

export default function Home() {
  const [coins, setCoins] = useState<coin[]>([]);

  const options = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": process.env.NEXT_PUBLIC_COINRANKING_API_KEY,
    },
  };

  useEffect(() => {
    // const getCoins = () => {
    //   fetch("https://api.coinranking.com/v2/coins", options)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       setCoins(result.data.coins);
    //     });
    // };

    const getCoins = () => {
      fetch("https://api.coinranking.com/v2/coins", options)
        .then((response) => response.json())
        .then((result) => {
          if (result?.data?.coins) {
            setCoins(result.data.coins);
          } else {
            console.error("Unexpected response format:", result);
          }
        })
        .catch((error) => {
          console.error("Error fetching coins:", error);
        });
    };

    getCoins();
  }, []);

  useEffect(() => {
    console.log(coins);
  }, [coins]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {coins?.map((coin) => (
        <div key={coin.uuid}>{coin.name}</div>
      ))}
    </div>
  );
}
