import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header section  */}
      <Header />

      {/* Navigation section  */}
      <NavBar />

      {/* Result section  */}
      <Cards results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
