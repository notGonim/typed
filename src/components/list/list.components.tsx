import React, { useEffect, useState } from "react";
import { PeopleInterface } from "../../constants/interfaces";
import { Form } from "../form/form.component";
import { Card } from "./card/card.component";



export const List = () => {
  const [people, setPeople] = useState<PeopleInterface["people"]>([]);

  useEffect(()=>{
    console.log(people)
  },[people])
  return (
    <>
      <Card people={people} />
      <Form  setPeople={setPeople} people={people}/>
    </>
  );
};
