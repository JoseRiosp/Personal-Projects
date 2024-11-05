import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

//Create an scheme with Yup
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const navigate=useNavigate()

  const initialCredentials = {
    email: "",
    password: "",
  };

  async function onSubmitForm(values) {
    await new Promise((r) => setTimeout(r, 800));
    alert(JSON.stringify(values, null, 2));
    localStorage.setItem("credentials", values);
    navigate('/profile');
  }

  return (
    <div>
      <h4>Login</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema} //from Yup
        onSubmit={onSubmitForm}
      >
        {({ values, touched, errors, isSubmitting, handleSubmit }) => {
          return <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="example@mail.com"
              type="email"
            />
            {errors.email && touched.email && (
              <div><ErrorMessage name="email"></ErrorMessage></div>
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {errors.password && touched.password && (
              <div><ErrorMessage name="password"></ErrorMessage></div>
            )}
            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>;
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
