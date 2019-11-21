import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { LoginComponent } from "../generated/apolloComponents";

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

export default IndexPage;
