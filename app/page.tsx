"use client";

import { useState, useEffect } from "react";

const flag1 = `cODe_Ctf{EAsy_xSS}`;
const flag2 = `CoDE_ctf{aDvAnced_xSS}`;

export default function Home() {
  const [shouldShowFlag1, setShouldShowFlag1] = useState(false);
  const [shouldShowFlag2, setShouldShowFlag2] = useState(false);

  useEffect(() => {
    // Check if the referrer is 'localhost:3000'
    const referrer = document.referrer;
    //Needs to be changed to the actual referrer
    if (referrer.includes("localhost:3000")) {
      setShouldShowFlag1(true);
    }
    if (referrer.includes("localhost:3000")) {
      setShouldShowFlag2(true);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {shouldShowFlag1 && (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono flag-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {flag1}
          </p>
        </div>
      )}
      {shouldShowFlag2 && (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono flag-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {flag2}
          </p>
        </div>
      )}
    </main>
  );
}
