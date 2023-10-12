import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();


  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`http://localhost:5555/books/${id}`)
  //     .then((response) => {
  //       setAuthor(response.data.author);
  //       setTitle(response.data.title);
  //       setPublishYear(response.data.publishYear);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       alert("An error occured , check the console.");
  //       console.log(error);
  //     });
  // }, []);


  // const handleSaveBook = () => {
  //   const data = {
  //     title,
  //     author,
  //     publishYear,
  //   };
  //   setLoading(true);
  //   axios
  //     .post('http://localhost:5555/books',data)
  //     .then(() =>{
  //       setLoading(false);
  //       navigate('/');
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       alert("An error occured. Please check the console.")
  //       console.log(error);
  //     })
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("An error occured , check the console.");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleUpdateBook = async () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    try {
      await axios.put(`http://localhost:5555/books/${id}`, data);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert("An error occurred. Please check the console.");
      console.log(error);
    }
  };

  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" text-3xl my-4">Update Book</h1>
      {loading ? <Spinner /> : ""}
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button onClick={handleUpdateBook} className=" p-2 bg-sky-300 m-8">
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;
