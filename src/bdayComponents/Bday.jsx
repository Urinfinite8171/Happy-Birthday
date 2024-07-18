import React from "react";

function Bday(p, isTrue) {
  let curtdate = new Date();
  let date = new Date(p);
  console.log(
    date.getFullYear() + ", " + (date.getMonth() + 1) + ", " + date.getDate()
  );
  date > curtdate
    ? (document.getElementById("days").innerText = `Your not Born Yet`)
    : findAge(p);

  if (
    date.getDate() === curtdate.getDate() &&
    date.getMonth() + 1 === curtdate.getMonth() + 1
  ) {
    console.log("OK");
    return <div>Bday</div>;
  }
}

export default Bday;
