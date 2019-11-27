import { logoutMutation } from "../graphql/user/mutations/logout";
import { MyContext } from "../interfaces/MyContext";
import { withApollo } from "../lib/apollo";
import redirect from "../lib/redirect";

const Logout = () => null;

Logout.getInitialProps = async ({ apolloClient, ...ctx }: MyContext) => {
  await apolloClient.mutate({ mutation: logoutMutation });
  await apolloClient.resetStore();
  redirect(ctx, "/login");
  return {};
};

export default withApollo(Logout);
