import Image from "next/image";

export default function Fields() {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 lg:py-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={280}
              height={48}
              priority
              className="lg:pb-6 pb-4"
            />
            <p className="max-w-xl text-lg">
              I'm a human being. I've got opinions, I'm not always right, I'm
              not always on time, I don't always say things in the proper way,
              but my intentions are always extremely pure - Ye
            </p>

            {/* <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-[#FF7D29]">
                {" "}
                Ordinary - Work in Progress{" "}
              </a>
            </div> */}
          </div>

          <div className=" rounded-xl bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Нэр"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="И-Мэйл"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Утасны дугаар"
                    type="tel"
                    id="phone"
                    pattern="^[0-9]{8}$"
                    title="Please enter an 8-digit phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                 

                    <span className="text-md text-slate-900 flex justify-center align-middle text-center"> Хэмжээ </span>
                </div>
                <div>
                  <label
                    htmlFor="Option1"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm"> M </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm"> L </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm "
                  placeholder="Нэмэлт..."
                  rows="4"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
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
