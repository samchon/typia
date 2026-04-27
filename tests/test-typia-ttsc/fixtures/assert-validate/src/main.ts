import typia, { tags, TypeGuardError } from "typia";

interface User {
  id: string;
  name: string;
  age: number & tags.Minimum<0> & tags.Maximum<150>;
}

export const assert_string = (input: unknown): string =>
  typia.assert<string>(input);

export const assert_user = (input: unknown): User => typia.assert<User>(input);

export const assert_guard_user = (input: unknown): void =>
  typia.assertGuard<User>(input);

export class CustomTypiaError extends Error {
  public readonly props: TypeGuardError.IProps;

  public constructor(props: TypeGuardError.IProps) {
    super(`custom:${props.method}:${props.expected}`);
    this.name = "CustomTypiaError";
    this.props = props;
  }
}

export const RuntimeTypeGuardError = TypeGuardError;

export const assert_user_custom = (input: unknown): User =>
  typia.assert<User>(input, (props) => new CustomTypiaError(props));

export const create_assert_user_custom = typia.createAssert<User>(
  (props) => new CustomTypiaError(props),
);

export const create_assert_guard_user_custom = typia.createAssertGuard<User>(
  (props) => new CustomTypiaError(props),
);

export const validate_string = (input: unknown) =>
  typia.validate<string>(input);

export const validate_user = (input: unknown) => typia.validate<User>(input);
