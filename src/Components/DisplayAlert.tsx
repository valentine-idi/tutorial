import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import MyAlert from "./MyAlert";
import MyButton from "./MyButton/MyButton";

const DisplayAlert = () => {
  const [displayAlert, setHandleAlert] = useState(false);

  return (
    <>
      {displayAlert && (
        <MyAlert
          variant="danger"
          dismissable={true}
          onClose={() => setHandleAlert(false)}
        >
          My Alert{" "}
        </MyAlert>
      )}

      <MyButton onClick={() => setHandleAlert(true)}>My Button</MyButton>
    </>
  );
};

export default DisplayAlert;
