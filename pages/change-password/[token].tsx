import { Field, Formik } from "formik";
import Router from "next/router";
import React from "react";
import { InputField } from "../../components/fields/InputField";
import Layout from "../../components/Layout";
import { ChangePasswordComponent } from "../../generated/apolloComponents";
import { MyContext } from "../../interfaces/MyContext";
import { withApollo } from "../../lib/apollo";

const ChangePassword = ({ token }: { token: string }) => (
  <Layout title="Forgot Password Form">
    <ChangePasswordComponent>
      {changePassword => (
        <Formik
          initialValues={{
            password: ""
          }}
          onSubmit={async ({ password }) => {
            const res = await changePassword({
              variables: { data: { password, token } }
            });
            console.log({ res });
            Router.push("/");
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="password" component={InputField} type="password" />
              <button type="submit">Change Password</button>
            </form>
          )}
        </Formik>
      )}
    </ChangePasswordComponent>
  </Layout>
);

ChangePassword.getInitialProps = ({ query: { token } }: MyContext) => {
  return { token };
};

export default withApollo(ChangePassword);
