import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

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
        <Form>
          <Field name="username" type="text" placeholder="Enter name" />
          <Field name="password" type="password" placeholder="Enter name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
