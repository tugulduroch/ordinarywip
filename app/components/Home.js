"use client";

import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <div className="rounded-lg p-10 max-w-lg text-center">
        {" "}
        <Image
          src="/brand.png"
          alt="Logo"
          width={480}
          height={180}
          priority
          className="mx-auto mb-6"
        />
        {/* <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>{" "} */}
        <p className="text-white mb-6">
          All items have been sold out, and shipping will begin tomorrow. Thank you,
          all!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
