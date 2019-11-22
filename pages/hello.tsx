import * as React from "react";
import Layout from "../components/Layout";
import { HelloComponent } from "../generated/apolloComponents";
import { withApollo } from "../lib/apollo";

export default withApollo(() => (
  <Layout title="Hello Page">
    <HelloComponent>
      {({ data }) => (
        <div>{data && data.hello ? data.hello : "loading..."}</div>
      )}
    </HelloComponent>
  </Layout>
));
