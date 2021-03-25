import React from "react";

const Person = ({ persons }) => {
  return persons.map(person => (
      <tr key={person.id}>
        <th>{person.id}</th>
        <th>{person.surname}</th>
        <th>{person.name}</th>
        <th>{person.accuracy}</th>
        <th>{person.rate}</th>
      </tr>
));
}

export default Person;
