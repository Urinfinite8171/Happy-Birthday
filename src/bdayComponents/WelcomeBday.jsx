import React, { useState, useEffect } from "react";
import { dbList } from "../BdayService/BirthdayDbs";
import { useNavigate } from "react-router-dom";

function WelcomeBday() {
  const [date, setBdate] = useState("");
  const [showElements, setShowElements] = useState(false);
  const navigator = useNavigate();

  const [bdaysList, setBdaysList] = useState([]);

  useEffect(() => {
    return () => {
      setBdate(date);
    };
  }, []);

  useEffect(() => {
    dbList()
      .then((res) => {
        setBdaysList(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  function saveDetails(e) {
    e.preventDefault();
    console.log(date);
    if (date == "") {
      // alert(`Date Can't Be Empty`);
      document.getElementById("age").innerText = `Date Can't Be Empty`;
    } else {
      dbData(date);
      let curtdate = new Date();
      let birth = new Date(date);
      if (
        birth.getDate() === curtdate.getDate() &&
        birth.getMonth() + 1 === curtdate.getMonth() + 1
      ) {
        setShowElements(true);
      }
    }
  }

  function getDobdata() {
    navigator(`/${date}`);
  }

  function dbData(date) {
    const isTrue = bdaysList.filter((day) => day.dateOfBirth === date);
    console.log(isTrue);
    if (isTrue.length > 0) {
      let curtdate = new Date();
      let birth = new Date(date);
      console.log(
        birth.getFullYear() +
          ", " +
          (birth.getMonth() + 1) +
          ", " +
          birth.getDate()
      );
      if (
        birth.getDate() === curtdate.getDate() &&
        birth.getMonth() + 1 === curtdate.getMonth() + 1
      ) {
        getDobdata();
      } else {
        findAge(date);
      }
    } else {
      let curtdate = new Date();
      let birthdate = new Date(date);
      console.log(
        birthdate.getFullYear() +
          ", " +
          (birthdate.getMonth() + 1) +
          ", " +
          birthdate.getDate()
      );
      birthdate > curtdate
        ? (document.getElementById("age").innerText = `Invalid Date of Birth`)
        : findAge(date);
    }
  }

  return (
    <div className="my-card p-5 m-3 mx-[6px] inline-block w-[400px] ">
      <a href="https://en.wikipedia.org/wiki/Gal_Gadot">
        <img
          className="profilepic w-[300px] h-[300px] mx-auto cursor-pointer"
          src="../src/assets/photos/galgadot.png"
          alt="profile-pic"
        ></img>
      </a>
      <h1 className="font-[Arial] text-[28px] text-center mt-4 font-semibold ">
        Welcome
      </h1>
      <h2 className="text-[30px] text-center mt-1 mb-3 font-medium ">
        I'm Your Gal Gadot
      </h2>

      <div className="my-card p-5 m-3 mx-[6px]  max-w-sm">
        <label>
          <p className="text-orange-500 text-[23px] font-semibold">
            Let me find your Age!
          </p>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-2xl block text-[17px] validation text-slate-700">
            Date Of Birth
          </span>

          <input
            type="date"
            value={date}
            required
            onChange={(e) => setBdate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <p id="age" className="text-[17px] m-2 text-red-600"></p>
        <button
          className=" bg-green-700 text-white shadow-2xl mt-1 p-2 mb-4 rounded-lg font-semibold"
          onClick={saveDetails}
        >
          Submit
        </button>

        {showElements && (
          <div className="intro inline-block max-w-xl">
            <h3 className="m-3 font-semibold">
              &#129395;HAPPY BIRTHDAY &#129395;
            </h3>
            <p className="text-center text-[22px] m-3 font-medium">
              {" "}
              <span className="font-semibold text-[20px]">
                Oh! I'm So Sorry
              </span>
              <br />
              Introduce Your Self First.
            </p>
            <button className="ml-48 mb-3" onClick={() => navigator("/upload")}>
              Intoduce
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function findAge(p) {
  let year, months, days;
  let crtdate = new Date();
  let bdate = new Date(p);

  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let leapMonthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (crtdate.getDate() < bdate.getDate()) {
    if (
      (crtdate.getFullYear() % 400 === 0) | (crtdate.getFullYear() % 4 === 0) &&
      crtdate.getFullYear() % 100 !== 0
    ) {
      if (crtdate.getMonth() + 1 === 1) {
        days =
          crtdate.getDate() +
          leapMonthDays[leapMonthDays.length - 1] -
          bdate.getDate();
      } else {
        days =
          crtdate.getDate() +
          leapMonthDays[crtdate.getMonth() - 1] -
          bdate.getDate();
      }
      console.log("Leap Monthdays " + leapMonthDays[crtdate.getMonth() - 1]);

      if (crtdate.getMonth() === bdate.getMonth() + 1) {
        months = crtdate.getMonth() - 1 - bdate.getMonth();
        year = crtdate.getFullYear() - bdate.getFullYear();
      } else if (crtdate.getMonth() - 1 < bdate.getMonth() + 1) {
        months = crtdate.getMonth() - 1 + 12 - bdate.getMonth();
        year = crtdate.getFullYear() - 1 - bdate.getFullYear();
      } else {
        months = crtdate.getMonth() - 1 - bdate.getMonth();
        year = crtdate.getFullYear() - bdate.getFullYear();
      }
    } else if (
      (!crtdate.getFullYear() % 400 === 0) |
        (crtdate.getFullYear() % 4 === 0) &&
      crtdate.getFullYear() % 100 !== 0
    ) {
      if (crtdate.getMonth() + 1 === 1) {
        days =
          crtdate.getDate() + monthDays[monthDays.length - 1] - bdate.getDate();
      } else {
        days =
          crtdate.getDate() +
          monthDays[crtdate.getMonth() - 1] -
          bdate.getDate();
      }

      console.log("Monthdays " + monthDays[crtdate.getMonth() - 1]);

      if (crtdate.getMonth() === bdate.getMonth() + 1) {
        months = crtdate.getMonth() - 1 - bdate.getMonth();
        year = crtdate.getFullYear() - bdate.getFullYear();
      } else if (crtdate.getMonth() - 1 < bdate.getMonth() + 1) {
        months = crtdate.getMonth() - 1 + 12 - bdate.getMonth();
        year = crtdate.getFullYear() - 1 - bdate.getFullYear();
      } else {
        months = crtdate.getMonth() - 1 - bdate.getMonth();
        year = crtdate.getFullYear() - bdate.getFullYear();
      }
    }
  } else if (crtdate.getDate() >= bdate.getDate()) {
    days = crtdate.getDate() - bdate.getDate();

    if (crtdate.getMonth() < bdate.getMonth()) {
      months = crtdate.getMonth() + 1 + 12 - (bdate.getMonth() + 1);
      year = crtdate.getFullYear() - 1 - bdate.getFullYear();
    } else if (crtdate.getMonth() >= bdate.getMonth()) {
      months = crtdate.getMonth() - bdate.getMonth();
      year = crtdate.getFullYear() - bdate.getFullYear();
    }
  }

  let age = document.getElementById("age");

  if (age) {
    age.innerText = `Your ${year} Years ${months} Months ${days} Days Old!`;
  } else {
    return (
      <p
        className="text-[17px] m-2 text-left text-green-800
      "
      >
        Your journey has started{" "}
        <span className="font-semibold  text-orange-600">{year}</span> years ago
        on the Earth.
      </p>
    );
  }
}

export default WelcomeBday;
