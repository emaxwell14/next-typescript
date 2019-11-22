import React, { Component } from "react";
import { withApollo } from "../lib/apollo";

class MyApp extends Component<any> {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withApollo(MyApp);
