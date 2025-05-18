import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const { handleLogin } = useContext(AuthContext);

  const initialValues = {
    username: "",
    password: "qwe123",
  };

  const handleSubmit = (values, actions) => {
    handleLogin(values.username);
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="username"
            type="text"
            placeholder="Enter name"
          />
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter name"
          />
          <button className={s.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
