import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./MyForm.module.css";

interface Data {
  name: string;
  value: string;
  error: string;
}

function MyForm() {
  const [userInfo, setUserInfo] = useState([
    {
      name: "Name",
      value: "",
      error: "",
    },
    {
      name: "Username",
      value: "",
      error: "",
    },
    {
      name: "Email",
      value: "",
      error: "",
    },
  ]);

  const handleInputError = (name: string, value: string): string => {
    let error = "";

    if (!value) error = `${name} cannot be empty`;

    if (name == "Name") {
      if (!value.split(" ")[1]) error = "Please enter your first and last name";
    }

    if (name == "Username") {
      if (value.length < 5) error = "Username too short";
    }

    if (name == "Email") {
    }

    return error;
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newUserInfo = [...userInfo];
    const { name, value } = e.currentTarget;

    const index = newUserInfo.findIndex((info) => info.name == name);

    const error: string = handleInputError(name, value);

    newUserInfo[index].value = value;
    newUserInfo[index].error = error;

    setUserInfo(newUserInfo);
  };

  const handleFormError = (data: Data[]) => {
    let error = null;

    error = data.map((datum) => {
      if (!datum.value) datum.error = `${datum.name} cannot be empty`;
      return datum;
    });

    const isError = data.every((datum) => datum.error == "");

    if (isError === false) error = data;
    else error = null;

    return error;
  };

  const handleFormSubmit = () => {
    const newUserInfo = [...userInfo];

    const error: null | Data[] = handleFormError(newUserInfo);
    if (error) return setUserInfo(error);

    console.log("UserInfo", userInfo); //callbackend
  };

  return (
    <div className={styles.form}>
      <div className={styles.heading}>Sign up</div>

      {userInfo.map((info, index) => (
        <Form.Group key={index}>
          <Form.Label>{info.name}</Form.Label>
          <Form.Control
            type="text"
            placeholder={`Enter your ${info.name}`}
            onChange={handleChange}
            name={info.name}
          />

          {info.error && <p className={styles.error}>{info.error}</p>}
        </Form.Group>
      ))}

      <div className={`${styles.submit} d-grid`}>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </div>
    </div>
  );
}

export default MyForm;
