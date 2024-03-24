import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="bg-white text-justify mx-2" id="About">
        <div className="max-w-[1300px] lg:mx-auto my-2 sm:mx-5">
          <p className="text-lg lg:text-3xl font-semibold text-center md:text-left">
            ABOUT US
          </p>
          <div className="lg:flex justify-between items-center mx-3 lg:gap-4 xl:gap-10">
            <div className="text-base lg:text-xl xl:text-2xl">
              <span>
                Best Unisex Salon in Ambala for Bridal MakeUp, Smoothening,
                Keratin, Hair Spa, Hair Color, Facial, Highlights, Manicure,
                Pedicure, Hair Care, Skin Care and other beauty parlour
                services.
              </span>
              <br />
              <br />
              <span className="text-base font-light xl:text-xl">
                BBB Beauty Parlour provides Hair Styling, Hair Care, Skin Care,
                Bridal MakeUp and other services like Facials, Waxing, Spa,
                Smoothening, Keratin Treatment, Party Makeup, Hair Colorant,
                Highlights, Manicure Pedicure and many more. BBB is having best
                hair stylist, makeup artist and beautician who have long
                experience to deliver best quality to clients.
              </span>
            </div>
            <div>
              <Image
                height={1000}
                width={1000}
                src="/images/about.jpeg"
                className="h-72 m-2 max-w-[300px] mx-auto sm:h-96 sm:max-w-[400px] lg:h-80 xl:h-96"
              />
            </div>
          </div>
          <div className="mx-3 lg:text-lg">
            For Hygiene, we are using:
            <ul className="text-gray-700 text-justify list-decimal list-inside">
              <li className="text-start ml-4">
                Sanitizers pre and post service
              </li>
              <li className="text-start ml-4">
                Disinfectants twice / thrice for floor, outdoor, equipment and
                washroom cleaning
              </li>
              <li className="text-start ml-4">
                Masks and Gloves to avoid cross contamination
              </li>
            </ul>
            <span className="my-2">
              We maintain quality in service by using original branded products
              for all services. We use moisturizer, cleanser, primer,
              highlighter for basic services.
            </span>
          </div>
          <div className="lg:text-lg xl:text-xl mx-3">
            BBB offer affordable and competitive pricing for all its beauty
            salon services. We launch salon discount offers during all
            festivals. We welcome the clients feedback to improve our service
            standards.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
