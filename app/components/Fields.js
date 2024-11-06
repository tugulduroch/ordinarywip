"use client";

import Image from "next/image";
import emailjs from "emailjs-com";
import { useRouter } from 'next/navigation';

export default function Fields() {
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6shuiga",
        "template_9qu8hgb",
        e.target,
        "ua24M85ThRiy10k5K"
      )
      .then(
        (result) => {
          // alert("Амжилттай илгээгдлээ.");
          router.push("/success");
          console.log("Амжилттай илгээгдлээ.")
        },
        (error) => {
          alert("Алдаа гарлаа.");
        }
      );
  };

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 lg:py-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-6">
            <Image
              src="/brand.png"
              alt="Logo"
              width={280}
              height={48}
              priority
              className="lg:pb-6 pb-4"
            />
            <p className="max-w-xl text-lg pl-6 text-white">
              I'm a human being. I've got opinions, I'm not always right, I'm
              not always on time, I don't always say things in the proper way,
              but my intentions are always extremely pure.
            </p>

            <div className="mt-8">
              <p className="text-2xl font-bold text-[#FF7D29] pl-6">
                {" "}
                Shoot your Shot collection{" "}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-10 shadow-2xl lg:col-span-3 lg:p-14 border border-gray-200">
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-4 text-sm text-[#121212] shadow-sm transition duration-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 placeholder-gray-500"
                  placeholder="Нэр"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-4 text-sm text-[#121212] shadow-sm transition duration-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 placeholder-gray-500"
                    placeholder="И-Мэйл"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-4 text-sm text-[#121212] shadow-sm transition duration-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 placeholder-gray-500"
                    placeholder="Утасны дугаар"
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="^[0-9]{8}$"
                    title="8 оронтой тоо оруулна уу"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
                <div className="flex items-center justify-center text-gray-800 font-semibold">
                  <span>Хэмжээ</span>
                </div>
                <div>
                  <input
                    className="sr-only peer"
                    id="Option1"
                    type="radio"
                    name="option1"
                    
                  />
                  <label
                    htmlFor="Option1"
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 p-4 text-gray-600 shadow-sm transition duration-300 hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white peer-checked:border-black"
                  >
                    <span className="text-sm">M</span>
                  </label>
                </div>

                <div>
                  <input
                    className="sr-only peer"
                    id="Option2"
                    type="radio"
                    name="option2"
                  />
                  <label
                    htmlFor="Option2"
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 p-4 text-gray-600 shadow-sm transition duration-300 hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white peer-checked:border-black"
                  >
                    <span className="text-sm">L</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-4 text-sm text-[#121212] shadow-sm transition duration-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 placeholder-gray-500"
                  placeholder="Нэмэлт..."
                  rows="4"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-gray-800 hover:shadow-lg sm:w-auto"
                >
                  Захиалах
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
