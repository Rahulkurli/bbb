import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
import Modal from "./BookNow";

const Services = () => {
  return (
    <>
      <Navbar />
      <Modal />
      {/* Services */}
      <div>
        <Image
          height={2000}
          width={2000}
          src="/images/services/service-image.png"
        />
      </div>
      {/* services  */}
      <div className="p-2 bg-gray-100">
        <div className="max-w-[1300px] mx-auto ">
          <div>
            {/* card   */}
            {/* All  */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-2 md:p-0 md:text-xl">
              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/cosmetics.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">All</div>
              </div>

              {/* popular  */}

              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/towel.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Popular</div>
              </div>

              {/* Bridal/makeup  */}

              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/bridal.jpg"
                  className="w-full rounded-t-sm"
                />
                <div className="font-serif text-center p-2">Bridal/Makeup</div>
              </div>
              {/* Facial  */}

              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/facial.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Facial</div>
              </div>
              {/* Hair  */}

              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/hair.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Hair</div>
              </div>

              {/* waxing  */}

              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/waxing.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Waxing</div>
              </div>
              {/* Thereding  */}

              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/threding.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Threding</div>
              </div>
              {/* Manicure/padicure  */}

              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/manicure.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">
                  Manicure/Padicure
                </div>
              </div>
              {/* Face Bleach  */}

              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/face-bleach.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Face Bleach</div>
              </div>
              {/* nail   */}
              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/nail-extention.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Nail Extention</div>
              </div>
              {/* women  */}
              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/services/women.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Women</div>
              </div>
              {/* acrylic nail  */}
              <div
                className="bg-white drop-shadow-md rounded-sm"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                <Image
                  height={400}
                  width={400}
                  src="/images/nails.jpg"
                  className="rounded-t-sm w-full"
                />
                <div className="font-serif text-center p-2">Acrylic Nails</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
