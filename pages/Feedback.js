import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

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

  return (
    <>
      <Navbar />
      <div className="p-3">
        <h1 className="text-center font-semibold text-[#B4905E] text-lg lg:text-2xl">
          <u>Lovely Reviews</u>
        </h1>
        <div className="">
          {todos.map((elem) => {
            return (
              <>
                {elem.Review.length >= 5 && (
                  <>
                    <div
                      key={elem.id}
                      className="max-w-[1300px] mx-auto p-3 mt-3 lg:my-5 text-sm sm:text-base text-justify h-auto w-full sm:w-10/12 lg:w-7/12 rounded-lg shadow-md bg-gray-600 text-white hover:scale-105 transition-all transform duration-150 ease-out"
                    >
                      <p>{elem.Review}</p>

                      <p className="text-end mt-2 italic">
                        - {elem.FirstName}&nbsp;
                        {elem.LastName}
                      </p>
                    </div>
                  </>
                )}
              </>
            );
          })}{" "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TodoList;
