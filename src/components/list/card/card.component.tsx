import React from "react";
import { PeopleInterface } from "../../../constants/interfaces";

export const Card: React.FC<PeopleInterface> = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <div className="">
          <p>{person.name}</p>
          <p>{person.age}</p>
        </div>
      ))}
    </>
  );
};
