import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./HisForm.module.css";

function HisForm() {
  const mySchema = z.object({
    name: z.string().min(2, { message: "Cannot be less than 2 characters" }),
    age: z.number({ invalid_type_error: "Age field is required" }).min(18),
  });

  type FormData = z.infer<typeof mySchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(mySchema) });

  const onSubmit = (data: FieldValues) => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formContainer}>
        <Form.Group className="mb-3" controlId="formPlaintextName">
          <Form.Label column sm="2">
            Name
          </Form.Label>

          <Form.Control type="text" {...register("name")} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Age
          </Form.Label>

          <Form.Control
            type="number"
            {...register("age", { valueAsNumber: true })}
          />

          {errors.age && <p className={styles.error}>{errors.age.message}</p>}
        </Form.Group>

        <div className="d-grid">
          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default HisForm;
