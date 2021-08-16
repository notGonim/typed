export interface PeopleInterface {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export interface FormInterface{
    form:{
        name: string;
        age: number;
        url: string;
        note?: string;
    }
}