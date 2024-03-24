import Link from "next/link";
import { Right } from "./icons";
import Image from "next/image";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Carousel from "./Carousel";
import About from "./About";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Popup from "./Popup";
import Chat from "./Chat";
import Modal from "./BookNow";

const index = () => {
  return (
    <>
      {/* popup  */}
      <Popup />
      {/* modal popup categories  */}
      <Modal />
      {/* whatsapp chat  */}
      <Chat />
      {/* Navbar  */}
      <Navbar />
      {/*  CAROUSEL  START */}
      <Carousel />
      {/* ABOUT US */}
      <About />
      {/* BASIC SERVICES and extra details in CARDS */}
      <Cards />
      {/* TESTIMONIAL  */}
      <Testimonial />
      {/* book appointment   */} {/* */}
      <div className="bg-gray-200 flex justify-center lg:p-3 xl:p-5">
        {/* image  */}
        <div className="">
          <Image
            src={"/images/bride-a.jpg"}
            width={2000}
            height={2000}
            alt="bride image"
            className="p-16 pl-10 pr-0 hidden lg:inline-flex lg:h-[600px] xl:h-[800px] w-[1700px]"
          ></Image>
        </div>
        {/* text  */}
        <div className="rounded-md lg:h-96 xl:h-[600px] lg:mt-28 xl:mt-24 lg:-ml-20 text-center bg-white z-10 p-3 xl:grid xl:content-center">
          <p className="text-md text-[#B4905E] xl:text-2xl">Appointment</p>
          <p className="text-xl font-thin sm:font-normal xl:text-3xl xl:my-2">
            BOOK TIME TO GET APPOINTMENT
          </p>
          <p className="my-3 text-md text-justify sm:text-center mx-2 sm:mx-24 md:mx-0 xl:text-xl xl:mx-20 xl:text-justify">
            "Good Morning Guest! We’re so excited to have you in BBB's. You can
            contact us for special offers, packages, and many more.
            call/Whatsapp us at{" "}
            <Link href="tel:+91-1234567890" className="text-gray-500">
              +91-9817642874
            </Link>{" "}
            or email us
            <Link
              href="mailto:beautybeyond@gmail.com?body=Beauty Beyond Borders"
              className="text-gray-500"
            >
              &nbsp; beautybeyond@gmail.com
            </Link>{" "}
            Click button below to Book Appointment .”
          </p>
          <span
            className=" p-2 bg-black rounded-lg text-white xl:w-32 xl:mx-auto"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#bookNow"
          >
            Book Now
          </span>
        </div>
      </div>
      {/* CATEGORIES  starts from here  */}
      <div>
        <div className="flex justify-between items-center mx-2 md:mx-5 my-0">
          <p className="text-base font-semibold lg:text-2xl ml-2">CATEGORIES</p>
          <Link href={"/Services"}>
            <span className="flex text-base font-semibold items-center gap-3 lg:text-2xl sm:mt-1">
              View All
              <span className="py-2 lg:py-3 px-1 lg:px-2  text-white rounded-lg bg-[#B4905E]">
                <Right />
              </span>
            </span>
          </Link>
        </div>
        <div>
          {/* facgsolagbfvs  */}

          <div className="max-w-[1300px] xl:max-w-[1200px] xl:mx-auto -mb-0 sm:-mb-0 p-3 sm:p-1 sm:mx-auto grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-2 lg:gap-4 xl:gap-10">
            <div className=" shadow-lg mb-1 mx-1 rounded-md">
              <div className="overflow-hidden relative">
                <Image
                  height={800}
                  width={800}
                  src="/images/categories/bridal-makeup.jpg"
                  className="h-56 sm:h-80 lg:h-72 w-full"
                />
                <span className="tag sm:text-sm">Popular/Bridal Makeup</span>
              </div>
              <h1 className="px-2 py-2 sm:p-4 flex items-center justify-between ">
                <div className="text-[14px] sm:text-2xl lg:text-sm font-semibold sm:mt-2 text-left">
                  Bridal/ Party Makeup <br />
                  <span className="text-[10px] sm:text-normal lg:text-sm sm:text-base">
                    Starts from ₹7999.00/₹1499.00
                  </span>
                </div>

                <p
                  className="card-btn lg:p-2 sm:p-2 cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#bookNow"
                >
                  Book Service
                </p>
              </h1>
            </div>
            <div className="text-center shadow-lg mb-1 mx-1 rounded-md">
              <div className="overflow-hidden relative">
                <Image
                  height={800}
                  width={800}
                  src="/images/categories/hair-care.jpg"
                  className="h-56 sm:h-80 lg:h-72 w-full "
                />
                <span className="tag sm:text-sm">Hair, Women</span>
              </div>
              <h1 className="px-2 py-2 sm:p-4 flex items-center justify-between">
                <div className="text-[14px] sm:text-2xl lg:text-sm font-semibold sm:mt-2 text-left">
                  Hair Care <br />
                  <span className="text-[10px] sm:text-normal sm:text-base">
                    Starts from ₹1999.00
                  </span>
                </div>
                <p
                  className="card-btn lg:p-2 sm:p-2 cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#bookNow"
                >
                  Book Service
                </p>
              </h1>
            </div>
            <div className="text-center shadow-lg mb-1 mx-1 rounded-md">
              <div className="overflow-hidden relative">
                <Image
                  height={1000}
                  width={1000}
                  src="/images/nail-extention.jpg"
                  className="h-56 sm:h-80 lg:h-72 w-full "
                />
                <span className="tag sm:text-sm">Nail Extension</span>
              </div>
              <h1 className="px-2 py-2 sm:p-4 flex items-center justify-between">
                <div className="text-[14px] sm:text-2xl lg:text-sm font-semibold sm:mt-2 text-left">
                  Nail Extention <br />
                  <span className="text-[10px] sm:text-normal sm:text-base">
                    Starts from ₹499.00
                  </span>
                </div>
                <p
                  className="card-btn lg:p-2 sm:p-2 cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#bookNow"
                >
                  Book Service
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* brands  */}
      <div className="max-w-[1300px] mx-auto hidden sm:grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-10">
        <div className="brand lg:p-14 md:p-20 sm:px-56">
          <Image height={500} width={500} src="/images/loreal-logo.jpg" />
        </div>
        <div className="brand lg:p-14 md:p-20 sm:px-56">
          <Image height={500} width={500} src="/images/matrix-logo.jpg" />
        </div>
        <div className="brand lg:p-14 md:p-20 sm:px-56">
          <Image height={500} width={500} src="/images/Schwarzkopf.png" />
        </div>
        <div className="brand lg:p-14 md:p-20 sm:px-56">
          <Image height={500} width={500} src="/images/gkhair.jpg" />
        </div>
      </div>
      {/* FOOTER  */}
      <Footer />
    </>
  );
};

export default index;
