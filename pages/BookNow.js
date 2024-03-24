import { useState } from "react";

const Modal = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const goToWhatsApp = (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the input fields
    const nameValue = encodeURIComponent(name);
    const numberValue = encodeURIComponent(number);
    const emailValue = encodeURIComponent(email);
    const dateValue = encodeURIComponent(date);
    const timeValue = encodeURIComponent(time);
    const messageValue = encodeURIComponent(message);
    const serviceValue = encodeURIComponent(service);

    // Construct the WhatsApp message URL
    const url =
      "https://wa.me/+91-9817642874" +
      "?text=" +
      "Name: " +
      nameValue +
      "%0a" +
      "Phone: " +
      numberValue +
      "%0a" +
      "Email: " +
      emailValue +
      "%0a" +
      "Date: " +
      dateValue +
      "%0a" +
      "Time: " +
      timeValue +
      "%0a" +
      "Message: " +
      messageValue +
      "%0a" +
      "Service: " +
      serviceValue;

    // Open the WhatsApp message URL in a new window/tab
    window.open(url, "_blank").focus();
    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
    setService("");
    setDate("");
    setTime("");
  };

  return (
    <>
      <div
        className="modal fade"
        id="bookNow"
        autoFocus
        aria-labelledby="bookNowLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="text-center p-3 bg-gray-700 text-white rounded-t-md">
              <h1 className="modal-title text-2xl" id="bookNowLabel">
                Book Appointment
              </h1>
            </div>
            <div className="modal-body">
              <form className="" onSubmit={goToWhatsApp}>
                {/* Rest of the input fields */}
                <input
                  className="p-2 rounded-lg outline-2 w-full my-2 border"
                  placeholder="Name"
                  type="text"
                  id="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="p-2 rounded-lg outline-2 w-full my-2 border"
                  placeholder="Contact Number"
                  type="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
                <input
                  className="p-2 rounded-lg outline-2 w-full my-2 border"
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="p-2 rounded-lg outline-2 w-full my-2 border"
                  placeholder="date"
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  className="p-2 rounded-lg outline-2 w-full my-2 border"
                  placeholder="time"
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
                {/* <input
                  className="p-2 rounded-lg outline-2 w-full my-2 border"
                  placeholder="service"
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                /> */}
                <input
                  className="p-2 rounded-lg outline-2 w-full my-2 border"
                  placeholder="Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <select
                  className="p-2 rounded-lg outline-2 w-full my-2 border"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option active>--SELECT SERVICE--</option>
                  <option>Acrylic Art - ₹799/-</option>
                  <option>Bridal Makeup - ₹7999/-</option>
                  <option>Engagement Makeup - ₹3499/-</option>
                  <option>Facial - ₹299/-</option>
                  <option>Hair Service - ₹1999/-</option>
                  <option>Manicure & Paddicure - ₹499/-</option>
                  <option>Nail Extention - ₹799/-</option>
                  <option>Party makeup - ₹1499/-</option>
                  <option>Reception Makeup - ₹3499/-</option>
                </select>
                {/* ... */}
                <div className="bg-gray-700 p-2 rounded-lg flex justify-end">
                  <span
                    className="p-2 rounded-lg border text-white mr-2 cursor-pointer"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </span>
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-[#B4905E] text-white"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
