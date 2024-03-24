import Link from "next/link";
import { Mail, Menu, Phone, User } from "../pages/icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* top portion */}
      <div className="h-auto w-full bg-[#B4905E] text-white sm:p-1 font-serif text-xs lg:text-base flex justify-end items-center">
        <div className="flex flex-wrap justify-end space-x-2 mr-1">
          <Phone />
          <span>+91-1234567890</span>
          <Phone /> <span>+91-1234567890</span>
          <Mail /> <span>abc@gmail.com</span>
        </div>
      </div>
      {/* NAVBAR  */}
      <div className="bg-gray-700 text-white">
        <div className="flex justify-between h-auto p-1 items-center max-w-[1400px] mx-auto">
          {/* left  */}
          <div className="flex gap-1 ml-1">
            <Image
              src={
                "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=2000"
              }
              alt="logo"
              width={50}
              height={40}
              className="h-8 w-8 sm:w-[50px] sm:h-[50px] "
            ></Image>
            <span className="flex items-center font-thin text-[12px] sm:text-lg lg:text-xl">
              <Link href={"/"}>Beauty Beyond Borders</Link>
            </span>
          </div>
          {/* middle  */}
          <div className="lg:space-x-2 xl:space-x-4 hidden lg:inline-flex">
            <span className="p-2">
              <Link href={"#About"}>About Us</Link>
            </span>
            <span className="p-2">
              <Link href={"/api/Services"}>Services</Link>
            </span>
            <span className="p-2">
              <Link href={"/components/Contact"}>Contact Us</Link>
            </span>
            <span className="p-2">
              <Link href={"#Testimonial"}>Testimonial</Link>
            </span>
            <span className="rounded-lg bg-[#B4905E] p-2">
              <Link href={"/components/Feedback"}>Feedback</Link>
            </span>
            <span>
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class="btn bg-gray-700 text-gray-700"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Launch popup
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title text-gray-700"
                        id="staticBackdropLabel"
                      >
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close text-black font-bold p-2 text-center flex items-center"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        X
                      </button>
                    </div>
                    <div class="modal-body text-gray-800">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn p-2 text-gray-700 text-base"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn text-gray-700 p-2 text-base"
                      >
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          {/* right  */}
          <div className="mx-3 space-x-4 flex">
            <span className="lg:hidden mt-1 scale">
              <Link href={""}>
                <User />
              </Link>
            </span>
            <span className="lg:hidden scale mt-1">
              <Menu />
            </span>
            <span className="rounded-lg bg-[#B4905E] p-2  hidden lg:inline-flex">
              <Link href={""}>Login</Link>
            </span>
            <span className="rounded-lg bg-[#B4905E] p-2  hidden lg:inline-flex">
              <Link href={""}>SignUp</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
