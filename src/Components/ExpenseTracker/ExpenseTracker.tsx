import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./ExpenseTracker.module.css";

function ExpenseTracker() {
  const [data, setData] = useState([
    { description: "Milk", amount: 5, category: "Groceries" },
    { description: "Eggs", amount: 10, category: "Groceries" },
    { description: "Electricity", amount: 100, category: "Utilities" },
    { description: "Movies", amount: 15, category: "Entertainment" },
    { description: "Phone bill", amount: 35, category: "Utilities" },
    { description: "Bread", amount: 2.5, category: "Groceries" },
  ]);

  const [currentCategory, setCurrentCategory] = useState("All categories");

  const categories = ["Groceries", "Utilities", "Entertainment"];

  const mySchema = z.object({
    description: z.string().min(3).max(50),
    amount: z.number({ invalid_type_error: "Please Enter amount" }).min(0),
    category: z.enum(["Groceries", "Utilities", "Entertainment"], {
      message: "Please choose a category",
    }),
  });

  type FormData = z.infer<typeof mySchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(mySchema) });

  const newData =
    currentCategory === "All categories"
      ? data
      : data.filter(
          (d) => d.category.toLowerCase() === currentCategory.toLowerCase()
        );

  const handleTotal = () => {
    let total = 0;
    newData.forEach((d) => (total += d.amount));

    return Math.round(total).toFixed(2);
  };

  const handleDelete = (index: number) => {
    const unfilteredData = [...data];
    unfilteredData.splice(index, 1);
    setData(unfilteredData);
  };

  const onSubmit = (FormData: FormData) => {
    const newData = [...data];
    newData.push(FormData);

    setData(newData);
  };

  return (
    <div className={styles.wrapper}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className={styles.form}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" size="lg" {...register("description")} />

          {errors.description && <p>{errors.description.message}</p>}
        </Form.Group>

        <Form.Group className={styles.form}>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            {...register("amount", { valueAsNumber: true })}
          />

          {errors.amount && <p>{errors.amount.message}</p>}
        </Form.Group>

        <Form.Group className={styles.form}>
          <Form.Label>Categories</Form.Label>
          <Form.Select size="lg" {...register("category")}>
            <option></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>

          {errors.category && <p>{errors.category.message}</p>}
        </Form.Group>

        <div className="gap-2">
          <Button variant="primary" size="lg" type="submit" disabled={!isValid}>
            Submit
          </Button>
        </div>
      </Form>

      <div className={styles.dataWrapper}>
        <Form.Select
          size="lg"
          onChange={(e) => setCurrentCategory(e.target.value)}
        >
          <option>All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>

        <Table striped bordered className={styles.table}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {newData.map((d, index) => (
              <tr key={d.description}>
                <td>{d.description}</td>
                <td>${d.amount}</td>
                <td>{d.category}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}

            <tr>
              <td>Total</td>
              <td colSpan={3}>{handleTotal()}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ExpenseTracker;
