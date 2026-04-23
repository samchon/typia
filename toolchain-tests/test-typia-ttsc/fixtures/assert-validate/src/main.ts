import typia, { tags } from "typia";

interface User {
  id: string;
  name: string;
  age: number & tags.Minimum<0> & tags.Maximum<150>;
}

export const assert_string = (input: unknown): string =>
  typia.assert<string>(input);

export const assert_user = (input: unknown): User => typia.assert<User>(input);

export const validate_string = (input: unknown) =>
  typia.validate<string>(input);

export const validate_user = (input: unknown) => typia.validate<User>(input);
