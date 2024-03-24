import Link from "next/link";
import { Comment } from "./icons";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      {/* Testimonial   */}
      {/* Testimonial  */}
      <div className="my-5" id="Testimonial">
        <h1 className="text-[#B4905E] text-center text-xl"> Testimonial</h1>
        <div>
          <h1 className="text-lg text-center sm:text-2xl">
            Words That Keep Us Going
          </h1>
          <p className="flex justify-center gap-5 text-md">
            <span className="border-b-2">
              <Link href={"/Contact"}>Write a review</Link>
            </span>
            <span className="border-b-2">
              <Link href={"/Feedback"}>Read More</Link>
            </span>
          </p>
        </div>
      </div>
      {/* testimonial carousel  */}
      <div
        id="text"
        className="carousel slide pointer-event"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative px-2 -mt-12 text-justify">
          <div className="carousel-item active relative">
            <Image
              height={1000}
              width={1000}
              src="/images/white-bg.jpg"
              className="d-block w-full h-[350px] sm:h-[240px] "
              alt="..."
            />

            <span className="absolute w-full p-1 xl:text-xl sm:w-3/4 xl:w-3/4 top-0 left-1/2 -translate-x-1/2 -translate-y-0">
              <span className="">
                <Comment />
              </span>{" "}
              "I had a great experience with the door-to-door makeup service.
              The artist was professional and friendly, and she did a great job
              on my makeup. She was able to create a look that was both natural
              and sophisticated, and she was very patient with me as I tried out
              different looks. I would definitely recommend this service to
              anyone looking for a convenient and affordable way to get their
              makeup done."
              <br />
              <span className="text-md absolute left-2/3 text-end">
                {" "}
                - Kavita Sharma
              </span>
            </span>
          </div>
          <div className="carousel-item relative ">
            <Image
              height={1000}
              width={1000}
              src="/images/white-bg.jpg"
              className="d-block w-100 h-[350px] sm:h-[240px] "
              alt="..."
            />

            <span className="absolute w-full p-2 sm:w-3/4 xl:text-xl xl:w-3/4 top-0 left-1/2 -translate-x-1/2 -translate-y-0">
              <span>
                <Comment />
              </span>{" "}
              "I was so impressed with the makeup artist who came to my house.
              She was professional, friendly, and did a great job on my makeup.
              She listened to my requests and created a look that was both
              natural and flattering. I would definitely recommend her to anyone
              looking for door-to-door makeup services."
              <span className="text-md absolute left-2/3 mt-4 text-end">
                {" "}
                - Anjali Desai
              </span>
            </span>
          </div>
          <div className="carousel-item relative">
            <Image
              height={1000}
              width={1000}
              src="/images/white-bg.jpg"
              className="d-block w-100 h-[350px] sm:h-[240px]"
              alt="..."
            />

            <span className="absolute w-full p-2 sm:w-3/4 xl:text-xl xl:w-3/4 top-0 left-1/2 -translate-x-1/2 -translate-y-0">
              <span>
                <Comment />
              </span>{" "}
              "Overall, the reviews of makeup staff that work door to door are
              very positive. Customers seem to be impressed with the
              professionalism, friendliness, and quality of the makeup that is
              done. If you are looking for a convenient and affordable way to
              get your makeup done, then door-to-door makeup services may be a
              good option for you."
              <span className="text-md absolute left-2/3 mt-5">
                {" "}
                - Meera Iyer
              </span>
            </span>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#text"
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
          data-bs-target="#text"
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

export default Testimonial;
