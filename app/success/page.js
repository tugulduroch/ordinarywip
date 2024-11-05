// /app/success/page.js
import Success from './success';

const Page = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-4 px-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Success/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center px-4">
        Copyright © 2024 Ordinary - Work in Progress. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Page;