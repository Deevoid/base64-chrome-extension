import Head from "next/head";
import { Decode } from "../components/Decode/Decode";
import { Encode } from "../components/Encode/Encode";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-2">
      <Head>
        <title>Base 64 encode/decode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center max-w-md flex-1 px-5">
        <h1 className="text-lg mb-4 font-bold">
          Tired of visiting
          <span className="ml-1 text-gray-400">sameOldboringBase64.org?</span>
          <br />
          <span className="text-indigo-500 text-xl ">
            We are here for rescue.
          </span>
        </h1>
        <Encode />
        <Decode />
      </main>

      <footer className="flex items-center justify-center w-full bg-gray-800 text-gray-300 text-xs p-1 border-t">
        Made by{" "}
        <a className="animate-pulse ml-2" href="https://deevoid.netlify.app/">
          Dev
        </a>
      </footer>
    </div>
  );
}
