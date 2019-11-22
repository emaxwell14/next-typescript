import React from "react";
import { Formik, Field } from "formik";
import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";
import { LoginComponent } from "../generated/apolloComponents";
import Router from "next/router";

export default () => (
  <Layout title="Login Form">
    <LoginComponent>
      {login => (
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={async (data, { setErrors }) => {
            const response = await login({ variables: { ...data } });
            if (response && response.data && !response.data.login) {
              setErrors({
                email: "Invalid Login"
              });
              return;
            }
            Router.push("/");
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email" component={InputField} />
              <Field name="password" type="password" component={InputField} />
              <button type="submit">Register</button>
            </form>
          )}
        </Formik>
      )}
    </LoginComponent>
  </Layout>
);
