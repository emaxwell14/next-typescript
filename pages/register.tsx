import React from "react";
import { Formik, Field } from "formik";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";

export default () => (
  <Layout>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }}
      onSubmit={data => {
        console.log(data);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName" component={InputField} />
          <Field name="lastName" component={InputField} />
          <Field name="email" component={InputField} />
          <Field name="password" type="password" component={InputField} />
          <button type="submit">Register</button>
        </form>
      )}
    </Formik>
  </Layout>
);
