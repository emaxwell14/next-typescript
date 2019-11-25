import { NextPage } from "next";
import Link from "next/link";
import * as React from "react";
import Layout from "../components/Layout";
import { LoginComponent } from "../generated/apolloComponents";
import { withApollo } from "../lib/apollo";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <LoginComponent>
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate({
                variables: { email: "test@test.com", password: "password" }
              });
              console.log({ response });
            }}
          >
            Login
          </button>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default withApollo(IndexPage);
