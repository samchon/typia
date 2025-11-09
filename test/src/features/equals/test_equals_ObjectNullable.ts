import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_equals_ObjectNullable = (): void =>
  _test_equals("ObjectNullable")<ObjectNullable>(ObjectNullable)((input) =>
    typia.equals<ObjectNullable>(input),
  );
