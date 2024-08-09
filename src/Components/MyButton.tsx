import Button from "react-bootstrap/Button";

interface Props {
  variant?: string;
  onClick: (variant: string) => void;
}

const MyButton = ({ variant = "primary", onClick }: Props) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {variant}
    </Button>
  );
};

export default MyButton;
