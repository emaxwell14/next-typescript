import * as React from "react";
import { NextPageContext } from "next";

export default class Confirm extends React.PureComponent {
  static getInitialProps({ query: { token } }: NextPageContext) {
    return { token };
  }

  render() {
    console.log(this.props);
    return <div>confirm</div>;
  }
}
