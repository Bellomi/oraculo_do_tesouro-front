import Image from "next/image";
import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCoins } from "@/utils";
import MarketCard from "@/components/MarketCard";
import InstitutionContact from "@/components/InstitutionContact";
import LineChart from "@/components/LineChart";
import OracleTable from "@/components/OracleTable";
import { MarketProps } from "@/types";

export default async function Home({ searchParams }) {
  const allMarkets = await fetchCoins({
    institution: searchParams.institution,
    limit: 10,
  });

  const isDataEmpty =
    !Array.isArray(allMarkets) || allMarkets.length < 0 || !allMarkets;

  // console.log(allMarkets);

  return (
    <main className="overflow-hidden">
      <div className="home__filters">
        <Searchbar />

        <div className="home__filter-container">
          <CustomFilter title="instituição" />
        </div>
      </div>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Oráculos</h1>
          <h2>
            Um "oráculo" no contexto de Títulos do Tesouro Direto no Mercado
            Secundário é uma entidade ou serviço que fornece informações
            externas e confiáveis para contratos ou sistemas automatizados em
            uma plataforma financeira. Quando um contrato ou sistema precisa
            saber o preço atual de um Título do Tesouro Direto no Mercado
            Secundário, ele pode usar um oráculo para obter essa informação. O
            oráculo consulta fontes externas, como plataformas de negociação de
            títulos, para obter o preço mais recente. Ele então fornece essa
            informação ao contrato ou sistema, permitindo que ele execute lógica
            de negócios com base no valor atualizado do Título do Tesouro
            Direto.{" "}
          </h2>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__markets-wrapper">
              {allMarkets.slice(0, 20).map((market) => (
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
      <LineChart />
      {!isDataEmpty ? (
        <div>
          {allMarkets.slice(0, 20).map((market) => (
            <OracleTable key={market.exchange_id} market={market} />
          ))}
        </div>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-base font-bold">No results!</h2>
          <p>{allMarkets?.message}</p>
        </div>
      )}
    </main>
  );
}
