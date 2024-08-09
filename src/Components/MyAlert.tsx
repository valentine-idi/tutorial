import { ReactNode } from "react";
import Alert from "react-bootstrap/Alert";

interface Props {
  variant: string =;
  children: ReactNode;
}

const MyAlert = ({ variant, children }: Props) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default MyAlert;
