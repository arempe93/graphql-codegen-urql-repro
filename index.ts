import * as Types from './graphql.d';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const UserDocument = gql`
    query user {
  user(id: 1) {
    id
    username
    email
  }
}
    `;

export function useUserQuery(options?: Omit<Urql.UseQueryArgs<Types.UserQueryVariables>, 'query'>) {
  return Urql.useQuery<Types.UserQuery>({ query: Types.UserDocument, ...options });
};