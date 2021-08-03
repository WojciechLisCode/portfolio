import React from "react";
import YearItem from "./YearItem";
import years from "../data/years.json";

function Navbar() {
  console.log(years);
  // const fullYearsArray = [1985, 1986, 2009, 2021, 2022];
  // let allYearsArr = [];

  // for (let i = 1985; i < 2023; i++) {
  //   if (fullYearsArray.includes(i)) {
  //     allYearsArr.push(i);
  //   } else {
  //     allYearsArr.push(`${i}-`);
  //   }
  // }
  // console.log(allYearsArr);
  return (
    <div className="NavBar">
      {years.map((year) => (
        <YearItem
          year={year.year}
          key={year.year}
          description={year.description}
        />
      ))}
    </div>
  );
}

export default Navbar;
