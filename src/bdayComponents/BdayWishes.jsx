import React, { useState, useEffect } from "react";
import { getByDob } from "../BdayService/BirthdayDbs";
import { useParams } from "react-router-dom";
import { findAge } from "./WelcomeBday";

function BdayWishes() {
  const [bdaysList, setBdaysList] = useState([]);
  const { dob } = useParams();

  useEffect(() => {
    if (dob) {
      getByDob(dob)
        .then((res) => {
          setBdaysList(res.data);
        })
        .catch((error) => console.error(error));
    }
  }, [dob]);

  let bdayPerson = null;
  if (dob && bdaysList.length > 0) {
    const curtdate = new Date();
    const date = new Date(dob);

    console.log(
      date.getFullYear() + ", " + (date.getMonth() + 1) + ", " + date.getDate()
    );
    if (
      date.getDate() === curtdate.getDate() &&
      date.getMonth() + 1 === curtdate.getMonth() + 1
    ) {
      console.log("Happy Birthday");

      bdayPerson = bdaysList.map((data) => (
        <div
          key={data.id}
          className="my-card p-5 m-3 mx-[6px] inline-block max-w-sm"
        >
          <img
            className="profilepic w-[300px] h-[300px] mx-auto"
            src={`data:image/jpeg;base64,${data.image}`}
            alt="profile-pic"
          ></img>
          <p className="text-[25px] text-center mt-1 mb-3 font-medium">
            &#129395; HAPPY BIRTHDAY<span>&#129395;</span>
          </p>
          <p className="text-[23px] text-center mt-1 mb-3 font-medium ">
            {data.firstName}
            {" " + data.lastName}
          </p>
          <p className="text-lg text-green-600 text-center font-normal">
            “ Another adventure filled year awaits you. Welcome it by
            celebrating your birthday with pomp and splendor.”
          </p>
          <p className="text-lg text-red-500 text-center  font-bold">
            &#129395;Wishing you a very happy and fun-filled birthday!&#129395;
          </p>
          {findAge(data.dateOfBirth)}
          <button className="ml-[250px]">Email Me</button>
        </div>
      ));
    } else {
      findAge(dob);
    }
  }

  return (
    <>
      <div>{bdayPerson}</div>
    </>
  );
}

export default BdayWishes;
