import React from "react";
import { Facebook, Home, Instagram, Mail, Phone, Youtube } from "./icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {" "}
      {/* FOOTER  */}
      <div>
        <div className="h-auto lg:flex justify-center gap-5 bg-black text-white">
          <div className="w-auto h-auto p-4 mx-auto sm:mx-auto sm:my-16">
            {/* map  */}
            <Link
              href={
                "https://www.google.com/maps/place/Ambala+Cantt,+Haryana/@30.3532955,76.7968395,13z/data=!3m1!4b1!4m6!3m5!1s0x390fb6482e623f7b:0x1814169a97109fae!8m2!3d30.3610314!4d76.8485468!16zL20vMGRfel9w"
              }
            >
              <Image
                height={1000}
                width={1000}
                src="/images/googlemap.png"
                className="rounded-md md:w-[400px]"
              />
            </Link>
          </div>
          <div className="mx-2 sm:mx-14 lg:mt-6">
            {/* address  */}
            <Link href={"/Contact"}>
              <div className="flex justify-center items-center gap-2 text-lg sm:text-3xl lg:text-2xl my-2 border-b-2 p-2">
                <Image
                  height={1000}
                  width={1000}
                  src="/images/cosmetics.png"
                  className="p-1 rounded-lg bg-white h-10 w-10 "
                />
                Book An Appointment
              </div>
            </Link>
            <Link href={"/Contact"}>
              <p className="text-xl sm:text-2xl text-center">Get In Touch</p>
            </Link>
            <div className="footer-add">
              <Home />
              Address- 1491/3, Sikligarh Moholla, Ambala Cantt 133001
            </div>
            <div className="footer-add lg:justify-normal">
              <Phone />
              <a href="tel:+91-1234567890">+91-9817642874</a>
            </div>
            <div className="footer-add lg:justify-normal">
              <Phone />
              <a href="tel:+91-1234567890">+91-9817642874</a>
            </div>
            <div className="footer-add lg:justify-normal">
              <Mail />
              <a href="mailto:beautybeyondborders@gmail.com?body=Beauty Beyond Borders">
                beautybeyond@gmail.com
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 sm:text-center sm:mx-20 mx-3">
            {/* about  */}
            <p className="text-2xl sm:text-4xl lg:text-3xl mt-5 sm:my-3 md:my-1 lg:my-6 text-center">
              About Us
            </p>
            <p className="sm:text-lg text-justify mt-1 sm:text-normal sm:mx-40 md:mx-0 md:-ml-1">
              Best Unisex Salon in Ambala for Bridal MakeUp, Smoothening,
              Keratin, Hair Spa, Hair Color, Facial, Highlights, Manicure,
              Pedicure, Hair Care, Skin Care and other beauty parlour services.
            </p>
            <p className="text-xl sm:text-2xl mt-5 mb-1 text-center sm:text-normal sm:my-2">
              Follow Us At:
            </p>
            <div className="flex gap-2 justify-center">
              <Facebook />
              <Link
                href={
                  "https://www.instagram.com/makeup_by_zyro/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                }
              >
                <Instagram />
              </Link>
              <Youtube />
            </div>
          </div>
        </div>
        <div className="text-center text-sm  bg-black text-white p-4">
          {/* copyright  */}© 2023 All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
