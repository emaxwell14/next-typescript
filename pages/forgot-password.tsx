import { Field, Formik } from "formik";
import Router from "next/router";
import React from "react";
import { InputField } from "../components/fields/InputField";
import Layout from "../components/Layout";
import { ForgotPasswordComponent } from "../generated/apolloComponents";
import { withApollo } from "../lib/apollo";

export default withApollo(() => (
  <Layout title="Forgot Password Form">
    <ForgotPasswordComponent>
      {forgotPassword => (
        <Formik
          initialValues={{
            email: ""
          }}
          onSubmit={async data => {
            const res = await forgotPassword({ variables: data });
            console.log({ res });
            Router.push("/check-email");
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email" component={InputField} />
              <button type="submit">Register</button>
            </form>
          )}
        </Formik>
      )}
    </ForgotPasswordComponent>
  </Layout>
));
