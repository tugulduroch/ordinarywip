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
          Pre-orders will be available soon. Stay tuned for updates and be ready
          to claim your style when pre-orders open!"
        </p>
      </div>
    </div>
  );
};

export default HomePage;
