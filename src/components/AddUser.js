import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [rollnumber, setrollNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();


  const RadioInput = ({label, value, checked, setter}) => {
    return (
      <label>
        <input type="radio" checked={checked === value}
               onChange={() => setter(value)} />
        <span>{label}</span>
      </label>
    );
};

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,rollnumber,age,gender
    };
    addUser(newUser);
    history.push("/");
    const json = JSON.stringify(newUser, null, 4);
    console.clear();
    console.log(json);
  };


  return (
  
    <div className="container">
    <Form onSubmit={onSubmit}>
      <FormGroup className="d-auto">
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter user"
          required
        ></Input>
        <Input
          type="text"
          value={rollnumber}
          onChange={(e) => setrollNumber(e.target.value)}
          name="rollnumber"
          placeholder="Enter roll number"
          required
        ></Input>
        <Input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          name="age"
          placeholder="Enter your Age"
          required
        ></Input>
        <label>Gender:</label>
        <RadioInput label="Male" value="male" checked={gender} setter={setGender}  />
        <RadioInput label="Female" value="female" checked={gender} setter={setGender} />
      </FormGroup>
      <Button className="mt-4" type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger .ml-2 mt-4">
        Cancel
      </Link>
    </Form>
    </div>
 
  );
};
