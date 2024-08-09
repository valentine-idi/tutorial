import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const DisplayAlert = () => {
  const [displayAlert, setHandleAlert] = useState(false);

  return (
    <>
      {displayAlert && (
        <Alert onClose={() => setHandleAlert(false)} dismissible>
          My Alert
        </Alert>
      )}

      <Button onClick={() => setHandleAlert(true)}>My Button</Button>
    </>
  );
};

export default DisplayAlert;
