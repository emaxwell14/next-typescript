import * as React from "react";
import { Mutation } from "react-apollo";
import Link from "next/link";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Mutation
        mutation={gql`
          mutation {
            login(password: "password", email: "test@test.com") {
              id
              firstName
              lastName
              email
              name
            }
          }
        `}
      >
        {(mutate: () => any) => (
          <button
            onClick={async () => {
              const response = await mutate();
              console.log({ response });
            }}
          >
            Login
          </button>
        )}
      </Mutation>
    </Layout>
  );
};

export default IndexPage;
