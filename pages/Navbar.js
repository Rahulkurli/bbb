import Link from "next/link";
import Image from "next/image";
import { Mail, MenuBar, Phone } from "./icons";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  return (
    <>
      {/* top portion */}
      <div className="h-auto w-full bg-[#B4905E] text-white p-1 font-serif text-[9px] sm:text-base flex justify-end items-center">
        <div className="flex flex-wrap justify-end space-x-1 mr-1">
          <Phone />
          <a href="tel:+91-1234567890">+91-9817642874</a>
          <Phone /> <a href="tel:+91-1234567890">+91-9817642874</a>
          <span className="flex gap-1">
            <Mail />
            <a href="mailto:beautybeyond@gmail.com?body=Beauty Beyond Borders">
              beautybeyond@gmail.com
            </a>
          </span>
        </div>
      </div>
      {/* NAVBAR  */}
      <div className="bg-gray-700 text-white sticky top-0 z-30">
        <div className="flex justify-between h-auto items-center max-w-[1400px] mx-auto">
          {/* left  */}
          <Link href={"/"}>
            <div className="flex gap-1 ml-2">
              <Image
                src={"/images/logo-12.png"}
                alt="logo"
                width={4000}
                height={4000}
                className="h-10 w-44 sm:w-[350px] p-1 sm:h-[70px] "
              ></Image>
              <span className="flex items-center text-[14px] sm:text-lg lg:text-xl"></span>
            </div>
          </Link>
          {/* middle  */}
          <div className="lg:space-x-2 xl:space-x-6 hidden lg:inline-flex">
            <span className="p-2">
              <Link href={"/#About"}>About Us</Link>
            </span>
            <span className="p-2">
              <Link href={"/Services"}>Services</Link>
            </span>
            <span className="p-2">
              <Link href={"/Contact"}>Contact Us</Link>
            </span>
            <span className="p-2">
              <Link href={"/#Testimonial"}>Testimonial</Link>
            </span>
            <span className="rounded-lg bg-[#B4905E] p-2">
              <Link href={"/Feedback"}>Feedback</Link>
            </span>
          </div>
          {/* menu button  */}
          <span className="lg:hidden mt-1 mr-6 flex">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5">
                  <MenuBar />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute -right-5 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Home
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#About"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          About Us
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/Services"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Services
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/Contact"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Contact Us
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#Testimonial"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Testimonials
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/Feedback"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Feedback
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* end  */}
          </span>
          {/* right  */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
