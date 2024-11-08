"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';


const Success = () => {
  const router = useRouter();

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
          Та өөрийн бүртгүүлсэн и-мэйл хаягаа шалгана уу. Тун удахгүй
          баталгаажуулах и-мэйл очих бөгөөд баталгаажсан тохиолдолд таны
          захиалга амжилттай бүртгэгдэх болно. Баярлалаа.
        </p>
        <button
          onClick={() => router.push("/")}
          className="text-white px-6 py-2 rounded-lg underline "
        >
          Нүүр хуудас луу буцах
        </button>
      </div>
    </div>
  );
};

export default Success;
