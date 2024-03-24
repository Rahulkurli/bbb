import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);
  const notify = () => toast.success("Message Sent Successfully!");

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "todos"), {
        Review: todo,
        FirstName: fname,
        LastName: lname,
        Email: email,
        Number: number,
        Message: message,
        TimeStamp: serverTimestamp(),
      });

      setTodo("");
      setEmail("");
      setFname("");
      setLname("");
      setNumber("");
      setMessage("");
    } catch (e) {
      console.log(e);
    }
  };
  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  function gotowhatsapp() {
    var name = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("message").value;

    var url =
      "https://wa.me/+91-9817642874?text=" +
      "Name: " +
      name +
      "" +
      lname +
      "%0a" +
      "Phone: " +
      phone +
      "%0a" +
      "Email: " +
      email +
      "%0a" +
      "Question/Service: " +
      service;

    window.open(url, "_blank").focus();
  }
  return (
    <>
      <Navbar />
      <div className=" p-3 bg-[url(/images/bg.jpg)] bg-no-repeat bg-cover">
        <div className="container bg-gray-700 sm:max-w-[700px] w-full rounded-md">
          <form className="p-0" onSubmit={(addTodo, notify, gotowhatsapp)}>
            <h4 className="text-center pt-3 text-[#B4905E] text-xl font-semibold">
              Beauty Beyond Borders
            </h4>
            <br />

            {/* first and last name  */}
            <div className="flex-row sm:flex justify-between gap-2 lg:my-4">
              <span className="w-full">
                <label className="text-white text-sm my-1">First Name:</label>
                <input
                  type={"text"}
                  name="fname"
                  id="fname"
                  autoComplete="off"
                  className="form-control text-sm"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </span>
              <span className="w-full">
                <label className="text-white text-sm my-1 ">Last Name:</label>
                <input
                  type={"text"}
                  name="lname"
                  id="lname"
                  autoComplete="off"
                  className="form-control text-sm"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </span>
            </div>

            {/* email  */}
            <div className="my-3">
              <label className="text-light text-sm">Email:</label>
              <input
                type={"email"}
                name="email"
                id="email"
                autoComplete="off"
                className="form-control text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* number  */}
            <div className="my-3">
              <label className="text-light text-sm">Phone No:</label>
              <input
                type={"number"}
                name="number"
                placeholder="Number"
                id="number"
                autoComplete="off"
                className="form-control text-sm"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            {/* message  */}
            <div className="my-3">
              <label className="text-light text-sm">Service/Question:</label>
              <input
                type={"message"}
                name="message"
                placeholder="Type Your Message"
                id="message"
                autoComplete="off"
                className="form-control text-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            {/* Review  */}
            <div className="my-3">
              <label className="text-light text-sm my-1">
                Give Review: (optional)
              </label>
              <textarea
                type={"Review"}
                name="Review"
                placeholder="Review"
                id="Review"
                autoComplete="off"
                className="form-control text-sm"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
            <br />
            <div>
              <button className="text-white w-100 p-2 mb-3 btn lg:text-base ">
                Send
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
