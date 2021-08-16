import React from "react";
import { PeopleInterface } from "../../../constants/interfaces";

export const Card: React.FC<PeopleInterface> = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <p>{person.name}</p>
      ))}
    </>
  );
};
