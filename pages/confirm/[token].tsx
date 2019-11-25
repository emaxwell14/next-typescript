import * as React from "react";
import { ConfirmUserMutation, ConfirmUserMutationVariables } from "../../generated/apolloComponents";
import { confirmUserMutation } from "../../graphql/user/mutations/confirmUser";
import { MyContext } from "../../interfaces/MyContext";
import { withApollo } from "../../lib/apollo";
import redirect from "../../lib/redirect";

class Confirm extends React.PureComponent {
  static async getInitialProps({
    query: { token },
    apolloClient,
    ...ctx
  }: MyContext) {
    if (!token) {
      return {};
    }
    await apolloClient.mutate<
      ConfirmUserMutation,
      ConfirmUserMutationVariables
    >({ mutation: confirmUserMutation, variables: { token: token as string } });
    redirect(ctx, "/login");

    // Dont need to return anything
    return {};
  }

  render() {
    console.error(
      "This page is just for a redirect, should all happen on server unless there is an error"
    );
    return <div>Something went wrong!</div>;
  }
}
export default withApollo(Confirm);
