import React, { useState } from "react";
import { PeopleInterface } from "../../constants/interfaces";

type Profile = {
  name: string;
  age: number;
  url: string;
  note?: string;
};

type HandlePeople = {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
  setPeople: React.Dispatch<React.SetStateAction<PeopleInterface["people"]>>;
};
export const Form: React.FC<HandlePeople> = ({ people, setPeople }) => {
  const [name, setName] = useState<Profile["name"]>("");
  const [age, setAge] = useState<Profile["age"]>(0);
  const [url, setUrl] = useState<Profile["url"]>("");
  const [note, setNote] = useState<Profile["url"]>("");

  const isInvalid = name === "" || url === "" || note === "";

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
    setPeople([...people, { name: name, age: age, url: url, note: note }]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please Write Your name"
          value={name}
          onChange={({ target }): void => setName(target.value)}
        />
        <input
          type="text"
          placeholder="Please Add your Photo"
          value={url}
          onChange={({ target }): void => setUrl(target.value)}
        />
        <input
          type="number"
          value={age}
          onChange={({ target }): void => setAge(+target.value)}
        />
        <textarea
          placeholder="Any Notes?"
          value={note}
          onChange={({ target }): void => setNote(target.value)}
        />
        <button type="submit" disabled={isInvalid} className={``}>
          Submit
        </button>
      </form>
    </>
  );
};
