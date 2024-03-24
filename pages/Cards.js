import Link from "next/link";
import { Checkbook, Person, Shield } from "./icons";
import Image from "next/image";

const Cards = () => {
  return (
    <>
      <div className="bg-gray-100 my-5\2 ">
        <div className="max-w-[1440px] mx-auto ">
          <div className="border-y-2"></div>
          <div className="text-center text-2xl font-semibold my-3 xl:text-3xl">
            <span className="text-[#B4905E]">BBB's</span> Unisex Hair & Makeup
          </div>
          <div>
            {/* card   */}
            <div className="max-w-[350px] sm:max-w-[1500px] mx-auto sm:p-3 lg:mx-auto md:mx-0 sm:mx-0 grid lg:grid-cols-4 md:grid-cols-2 gap-3">
              {/* first video with carousel  */}
              <div className="text-center hidden xl:inline-grid shadow-lg p-2 rounded-md col-span-2 row-span-2">
                <div className="overflow-hidden">
                  {/* carousel  */}
                  <div id="text2" className="carousel slider pointer-event">
                    <div className="carousel-inner relative px-2 -mt-12 text-justify">
                      <div className="carousel-item active ">
                        <video
                          src="/videos/vid-3.mp4"
                          typeof="video/mp4"
                          className="md:h-[700px] xl:h-[900px] w-full rounded-md"
                          controls
                          controlsList="nodownload"
                          poster="/images/about.jpeg"
                        />
                      </div>
                      <div className="carousel-item  ">
                        <video
                          src="/videos/vid-1.mp4"
                          typeof="video/mp4"
                          className="md:h-[700px] xl:h-[900px] w-full rounded-md"
                          controls
                          controlsList="nodownload"
                        />
                      </div>
                      <div className="carousel-item ">
                        <video
                          src="/videos/vid-2.mp4"
                          typeof="video/mp4"
                          className="md:h-[700px] xl:h-[900px] w-full rounded-md"
                          controls
                          controlsList="nodownload"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#text2"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#text2"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  {/* carousel end  */}

                  <h1 className="text-2xl font-semibold mt-4">Our Work</h1>
                </div>
              </div>
              {/* carousel video end  */}
              {/* second  */}
              <div className="text-center shadow-lg p-2 rounded-md">
                <div className="overflow-hidden">
                  <Image
                    height={2000}
                    width={2000}
                    src="/images/modal.jpg"
                    className="h-80 sm:h-80 lg:h-60 xl:h-72 w-full hover:scale-105 duration-1000 rounded-md"
                  />
                </div>
                <h1 className="text-lg sm:text-2xl font-semibold mt-1 sm:mt-2">
                  Makeup
                </h1>
                <p className="text-sm sm:text-lg my-1 sm:my-3 mx-1 font-light">
                  Party Makeup services for every vocations and it starts from
                  ₹1499 only.
                </p>
                <Link href={"/Services"}>
                  <span className="btn sm:p-2 xl:text-base xl:my-2">
                    View Service
                  </span>
                </Link>
              </div>
              {/* third  */}
              <div className="text-center shadow-lg p-2 rounded-md">
                <div className="overflow-hidden">
                  <Image
                    height={2000}
                    width={2000}
                    src="/images/bride-looking-down.jpg"
                    className="h-80 sm:h-80 lg:h-60 xl:h-72 w-full hover:scale-105 duration-1000 rounded-md"
                  />
                </div>
                <h1 className="text-lg sm:text-2xl font-semibold mt-1 sm:mt-2">
                  Bridal
                </h1>
                <p className="text-sm sm:text-lg my-1 sm:my-3 mx-1 font-light">
                  Bridal service starts from ₹7999, Pre work is complementary.
                </p>
                <Link href={"/Services"}>
                  <span className="btn sm:p-2 xl:text-base xl:my-2">
                    View Service
                  </span>
                </Link>
              </div>
              {/* fourth  */}
              <div className="text-center shadow-lg  p-2 rounded-md">
                <div className="overflow-hidden">
                  <Image
                    height={2000}
                    width={2000}
                    src="/images/hair.jpg"
                    className="h-60 sm:h-80 lg:h-60 xl:h-72 w-full hover:scale-105 duration-1000 rounded-md"
                  />
                </div>
                <h1 className="text-lg sm:text-2xl font-semibold mt-1 sm:mt-2">
                  Hair care
                </h1>
                <p className="text-sm sm:text-lg my-1 sm:my-3 mx-1 font-light">
                  BBB's unisex Hair & Makeup studio specialized in hair
                  services.
                </p>
                <Link href={"/Services"}>
                  <span className="btn sm:p-2 xl:text-base xl:my-2">
                    View Service
                  </span>
                </Link>
              </div>
              {/* fifth  */}
              <div className="text-center shadow-lg p-2 rounded-md">
                <div className="overflow-hidden">
                  <Image
                    height={1000}
                    width={1000}
                    src="/images/card-facial.jpg"
                    className="h-60 sm:h-80 lg:h-60 xl:h-72 w-full hover:scale-105 duration-1000 rounded-md"
                  />
                </div>
                <h1 className="text-lg sm:text-2xl font-semibold mt-1 sm:mt-2">
                  Facial
                </h1>
                <p className="text-sm sm:text-lg my-1 sm:my-3 mx-1 font-light">
                  Good skin makes you confident and BBB's provide all skin care
                  services
                </p>
                <Link href={"/Services"}>
                  <span className="btn sm:p-2 xl:text-base xl:my-2">
                    View Service
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider  */}
      {/* <SimpleSlider /> */}

      {/* DETAILS  */}
      <div className="bg-white my-4 mx-10 text-justify">
        <div className="max-w-[1300px] mx-auto lg:flex justify-between items-end xl:items-center">
          <div className="">
            <p className="text-xl font-semibold sm:text-center xl:text-start sm:text-2xl xl:text-3xl">
              <span className="text-[#B4905E]">BBB's</span> Unisex Hair & Makeup
              Studio suitable for
            </p>
            <p className="text-lg font-base sm:text-justify xl:text-start xl:text-xl">
              Bridal and Makeup, Waxing, Facials, Body Care, Hair Care, face
              Bleach, Manicure
            </p>
            <p className="text-md sm:text-justify xl:text-lg xl:mr-5">
              BBB's Beauty Parlour provides Hair Styling, Hair Care, Skin Care,
              Bridal MakeUp and other services like Facials, Waxing, Spa,
              Smoothening, Keratin Treatment, Party Makeup, Hair Colorant,
              Highlights, Manicure Pedicure and many more.
            </p>
          </div>
          <div className="max-w-[400px] mx-auto my-10">
            <img
              src="/images/modal-y.jpg"
              className="rounded-first lg:w-9/12 xl:w-full sm:w-3/4"
            />
            <img
              src="/images/modal-x.jpg"
              className="rounded-second xl:w-72 lg:w-3/12 lg:-mt-24 xl:ml-48 md:w-48 sm:w-1/4 xl:-mt-40 sm:-mt-20"
            />
          </div>
        </div>
      </div>
      {/* EXTRA DETAILS  */}
      <div className="mt-32 w-full h-auto p-4 bg-black opacity-90 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* first  */}
        <div className="h-48 w-full md:h-44 md:w-56 bg-yellow-50 rounded-xl text-center">
          <span>
            <Person />{" "}
          </span>
          <span className="text-3xl font-semibold">5+</span>
          <br />
          <span className="text-lg">Specialist</span>
        </div>
        {/* second  */}
        <div className="h-48 w-full md:h-44 md:w-56 bg-yellow-50 rounded-xl text-center">
          <span>
            <Shield />{" "}
          </span>
          <span className="text-3xl font-semibold">500+</span>
          <br />
          <span className="text-lg">Happy User</span>
        </div>
        {/* third  */}
        <div className="h-48 w-full md:h-44 md:w-56 bg-yellow-50 rounded-xl text-center">
          <span>
            <Checkbook />{" "}
          </span>
          <span className="text-3xl font-semibold">600+</span>
          <br />
          <span className="text-lg">Services</span>
        </div>
      </div>
    </>
  );
};

export default Cards;
