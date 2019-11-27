import gql from "graphql-tag";

export const changePasswordMutation = gql`
  mutation changePassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
