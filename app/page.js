"use client";

import Fields from "./components/Fields";
import HomePage from "./components/Home";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-4 px-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#121212]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Home />
      </main>
      <footer className="row-start-3 w-full flex gap-6 flex-wrap items-center justify-center px-4 text-white">
        Copyright © 2024 Ordinary - Work in Progress. All Rights Reserved.
      </footer>
    </div>
  );
}
