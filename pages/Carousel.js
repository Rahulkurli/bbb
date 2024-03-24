import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        ></script>
      </Head>{" "}
      <div
        id="carouselExample"
        className="carousel slide pointer-event"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative">
          {/* first  */}

          <div className="carousel-item active relative">
            <Image
              src={"/images/bride-1.jpg"}
              alt="bride image"
              width={2000}
              height={2000}
              className="carousel-image xl:h-[650px] lg:h-[500px] md:h-[500px]"
            ></Image>

            <span className="carousel-text sm:text-lg md:text-xl xl:text-2xl sm:top-3/4 sm:mt-20 sm:left-1/2">
              Bringing you the best Bridal - Makeup starts from INR 7999/-
              <br />
              <span
                className="sm:hidden border-b-2 cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                {" "}
                &nbsp;Get Appointment
              </span>
            </span>
            <span className="carousel-btn md:text-xl xl:text-2xl">
              <Link href={"/Services"}>
                <span className=" hidden sm:inline-flex rounded-md p-1 bg-[#B4905E]">
                  View Service
                </span>
              </Link>
              <span
                className=" hidden sm:inline-flex rounded-md p-1 outline-2 outline cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                Get Appointment
              </span>
            </span>
          </div>

          {/* second  */}

          <div className="carousel-item relative">
            <Image
              src={"/images/nails.jpg"}
              alt="bride image"
              width={2000}
              height={2000}
              className="carousel-image xl:h-[650px] lg:h-[500px] md:h-[500px]"
            ></Image>

            <span className="carousel-text sm:text-lg md:text-xl text-gray-900 xl:text-2xl sm:top-3/4 sm:mt-20 sm:left-1/2">
              Acrylic Nails - starts from 799/- only
              <br />
              <span
                className="sm:hidden border-b-2 cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                {" "}
                &nbsp;Get Appointment
              </span>
            </span>
            <span className="carousel-btn md:text-xl xl:text-2xl">
              <Link href={"/Services"}>
                <span className=" hidden sm:inline-flex rounded-md p-1 bg-[#B4905E]">
                  View Service
                </span>
              </Link>
              <span
                className=" hidden sm:inline-flex rounded-md p-1 outline-2 outline cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                Get Appointment
              </span>
            </span>
          </div>

          {/* third  */}

          <div className="carousel-item  relative">
            <Image
              src={"/images/bride-xx.jpg"}
              alt="bride image"
              width={2000}
              height={2000}
              className="carousel-image xl:h-[650px] lg:h-[500px] md:h-[500px]"
            ></Image>

            <span className="carousel-text sm:text-lg md:text-xl xl:text-2xl sm:top-3/4 sm:mt-20 sm:left-1/2">
              Engagement/Reception Makeup starts from INR 3499/-
              <br />
              <span
                className="sm:hidden border-b-2 cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                {" "}
                &nbsp;Get Appointment
              </span>
            </span>
            <span className="carousel-btn md:text-xl xl:text-2xl">
              <Link href={"/Services"}>
                <span className=" hidden sm:inline-flex rounded-md p-1 bg-[#B4905E]">
                  View Service
                </span>
              </Link>
              <span
                className=" hidden sm:inline-flex rounded-md p-1 outline-2 outline cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                Get Appointment
              </span>
            </span>
          </div>

          {/* fourth  */}

          <div className="carousel-item relative">
            <Image
              src={"/images/facial.jpg"}
              alt="bride image"
              width={2000}
              height={2000}
              className="carousel-image xl:h-[650px] lg:h-[500px] md:h-[500px]"
            ></Image>

            <span className="carousel-text sm:text-lg md:text-xl xl:text-2xl sm:top-3/4 sm:mt-20 sm:left-1/2">
              The perfect way to treat yourself with Facial starter 299/- only
              <br />
              <span
                className="sm:hidden border-b-2 cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                {" "}
                &nbsp;Get Appointment
              </span>
            </span>
            <span className="carousel-btn md:text-xl xl:text-2xl">
              <Link href={"/Services"}>
                <span className=" hidden sm:inline-flex rounded-md p-1 bg-[#B4905E]">
                  View Service
                </span>
              </Link>
              <span
                className=" hidden sm:inline-flex rounded-md p-1 outline-2 outline cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#bookNow"
              >
                Get Appointment
              </span>
            </span>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
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
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
