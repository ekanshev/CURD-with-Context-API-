import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup className="d-auto mt-2 mb-2">
        <Label>Name</Label>
        <Input
          type="text"
          value={selectedUser.name}
          onChange={onChange}
          name="name"
          placeholder="Enter user"
          required
        ></Input>
        <Input
          type="text"
          value={selectedUser.rollnumber}
          on onChange={onChange}
          name="rollnumber"
          placeholder="Enter roll number"
          required
        ></Input>
        <Input
          type="text"
          value={selectedUser.age}
          onChange={onChange}
          name="age"
          placeholder="Enter your Age"
          required
        ></Input>
        <select
          class="custom-select mr-sm-2"
          id="inlineFormCustomSelect"
          name="gender"
          value={selectedUser.gender}
          onChange={onChange}
        >
          <option selected>Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </FormGroup>
      <Button type="submit">Save Changes</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
