import Image from 'next/image'
import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import OracleTable from "@/components/OracleTable";
import CustomFilter from "@/components/CustomFilter";
import { fetchCoins } from "@/utils";
import MarketCard from "@/components/MarketCard";

export default async function Home() {
  const allMarkets = await fetchCoins();

  const isDataEmpty =
    !Array.isArray(allMarkets) || allMarkets.length < 0 || !allMarkets;

  // console.log(allMarkets);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">
            Bancos e corretoras habilitados
          </h1>
          <p>Encontre a instituição</p>
        </div>
        <div className="home__filters">
          <Searchbar />

          <div className="home__filter-container">
            <CustomFilter title="instituição" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__markets-wrapper">
              {allMarkets.slice(0, 60).map((market) => (
                <MarketCard key={market.exchange_id} market={market} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-base font-bold">No results!</h2>
            <p>{allMarkets?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

