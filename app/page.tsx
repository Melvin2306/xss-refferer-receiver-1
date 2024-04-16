"use client";

import { useState, useEffect } from "react";

const flag = `hidden flag`;

export default function Home() {
  const [shouldShowFlag, setShouldShowFlag] = useState(false);

  useEffect(() => {
    // Check if the referrer is 'localhost:3000'
    const referrer = document.referrer;
    //Needs to be changed to the actual referrer
    if (referrer.includes("localhost:3000")) {
      setShouldShowFlag(true);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {shouldShowFlag && (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono flag-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {flag}
          </p>
        </div>
      )}
    </main>
  );
}
