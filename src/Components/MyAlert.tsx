import { ReactNode } from "react";
import Alert from "react-bootstrap/Alert";

interface Props {
  variant: string;
  children: ReactNode;
  dismissable?: boolean;
  onClose: () => void;
}

const MyAlert = ({ variant, children, dismissable, onClose }: Props) => {
  return (
    <Alert variant={variant} dismissible={dismissable} onClose={onClose}>
      {children}
    </Alert>
  );
};

export default MyAlert;
