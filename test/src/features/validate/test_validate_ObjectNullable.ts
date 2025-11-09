import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_validate_ObjectNullable = (): void =>
  _test_validate("ObjectNullable")<ObjectNullable>(ObjectNullable)((input) =>
    typia.validate<ObjectNullable>(input),
  );
