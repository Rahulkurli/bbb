import Image from "next/image";
import Link from "next/link";
import React from "react";

const Chat = () => {
  return (
    <div className="fixed bottom-10 right-8 sm:right-16 z-50 flex w-auto">
      <Link href={"https://wa.me/9817642874"}>
        {/* <span className="bg-green-500 text-white">Quick Chat</span> */}
        <Image
          height={1000}
          width={1000}
          src="/images/whatsapp-logo.png"
          className="w-12 h-12 ml-4 animate-bounce hover:scale-110 transition-all duration-300 ease-in-out"
        />
        {/* <span className="hidden md:inline-flex text-white bg-green-400 rounded-md px-1">
          Contact Us
        </span> */}
      </Link>
    </div>
  );
};

export default Chat;
