import React, { useState } from "react";
import { uploadPersonData } from "../BdayService/BirthdayDbs";
import { useNavigate } from "react-router-dom";

function Introduce() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDate] = useState("");
  const [image, setUpload] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    image: "",
    firstname: "",
    lastname: "",
    email: "",
    dateOfBirth: "",
  });

  function uploadDetails(e) {
    e.preventDefault();
    if (validations()) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("dateOfBirth", dateOfBirth);

      console.log(formData);

      uploadPersonData(formData)
        .then((res) => {
          console.log(res.data);
          alert(`Successfull! Glad to meet you`);
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  }

  function validations() {
    let vaild = true;

    const errorsCopy = { ...errors };
    if (firstName === "") {
      errorsCopy.firstname = "First Name is required.";
      vaild = false;
    } else if (firstName[0].toUpperCase() !== firstName[0]) {
      errorsCopy.firstname = "Start with a Capital letter.";
      vaild = false;
    } else {
      errorsCopy.firstname = "";
    }

    if (lastName === "") {
      errorsCopy.lastname = "Last Name is required.";
      vaild = false;
    } else if (lastName[0].toUpperCase() !== lastName[0]) {
      errorsCopy.lastname = "Start with a Capital letter.";
      vaild = false;
    } else {
      errorsCopy.lastname = "";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      errorsCopy.email = "Email is not valid.";
      vaild = false;
    } else {
      errorsCopy.email = "";
    }
    if (dateOfBirth === "") {
      errorsCopy.dateOfBirth = "Date of Birth is required.";
      vaild = false;
    } else {
      errorsCopy.dateOfBirth = "";
    }
    if (!image) {
      errorsCopy.image = "Upload Picture.";
      vaild = false;
    } else {
      errorsCopy.image = "";
    }
    setErrors(errorsCopy);
    return vaild;
  }

  return (
    <>
      <div className="p-6 mt-5 max-w-sm mx-auto bg-white rounded-xl my-shadow items-center space-x-4">
        <h2 className="text-2xl mb-4 text-center font-bold text-green-600">
          Introduce Your Self
        </h2>
        <form encType="multipart/form-data">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl block text-sm validation text-slate-700">
              First Name
            </span>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={(e) => setfirstName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
              placeholder="Enter your first name"
            />
            <p className=" text-red-500 text-xs mt-1 validation">
              {errors.firstname}
            </p>
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl block text-sm validation text-slate-700">
              Last Name
            </span>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={(e) => setlastName(e.target.value)}
              placeholder="Enter your last name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
            />
            <p className=" text-red-500 text-xs mt-1 validation">
              {errors.lastname}
            </p>
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl block text-sm validation text-slate-700">
              Email Address
            </span>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
            />
            <p className=" text-red-500 text-xs mt-1 validation">
              {errors.email}
            </p>
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl block text-sm validation text-slate-700">
              Date of Birth
            </span>
            <input
              type="date"
              id="dob"
              name="dob"
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                   invalid:border-pink-500 invalid:text-pink-600
                   focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                 "
            />
            <p className=" text-red-500 text-xs mt-1 validation">
              {errors.dateOfBirth}
            </p>
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xl block text-sm validation text-slate-700">
              Upload Picture
            </span>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(e) => setUpload(e.target.files[0])}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                   invalid:border-pink-500 invalid:text-pink-600
                   focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                 "
            />
            <p className=" text-red-500 text-xs mt-1 validation">
              {errors.image}
            </p>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-600"
            onClick={uploadDetails}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Introduce;
