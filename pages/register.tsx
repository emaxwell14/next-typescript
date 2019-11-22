import React from "react";
import { Formik, Field } from "formik";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";
import { RegisterComponent } from "../generated/apolloComponents";

export default () => (
  <Layout title="Registration Form">
    <RegisterComponent>
      {register => (
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }}
          onSubmit={async (data, { setErrors }) => {
            try {
              await register({ variables: { data } });
            } catch (err) {
              const errors: { [key: string]: string } = {};
              err.graphQLErrors[0].validationErrors.forEach(
                (validationError: any) => {
                  Object.values(validationError.constraints).forEach(
                    (message: any) => {
                      errors[validationError.property] = message;
                    }
                  );
                }
              );
              setErrors(errors);
            }
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
      )}
    </RegisterComponent>
  </Layout>
);
