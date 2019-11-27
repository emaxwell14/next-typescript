import { Field, Formik } from "formik";
import Router from "next/router";
import React from "react";
import { InputField } from "../components/fields/InputField";
import Layout from "../components/Layout";
import { LoginComponent } from "../generated/apolloComponents";
import { meQuery } from "../graphql/user/queries/me";
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
            const response = await login({
              variables: data,
              update: (cache, { data }) => {
                if (!data || !data.login) {
                  return;
                }
                cache.writeQuery({
                  query: meQuery,
                  data: {
                    __typeName: "Query",
                    me: data.login
                  }
                });
              }
            });
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
              <button type="submit">Login</button>
            </form>
          )}
        </Formik>
      )}
    </LoginComponent>
  </Layout>
));
