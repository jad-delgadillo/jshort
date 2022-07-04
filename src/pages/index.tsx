import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Link from "next/link";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <div></div>
    </>
  );
};

export default Home;
