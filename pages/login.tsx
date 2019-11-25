import { Field, Formik } from "formik";
import Router from "next/router";
import React from "react";
import { InputField } from "../components/fields/InputField";
import Layout from "../components/Layout";
import { LoginComponent } from "../generated/apolloComponents";
import { withApollo } from "../lib/apollo";

export default withApollo(() => (
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
));
