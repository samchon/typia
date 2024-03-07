import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectNullable = _test_assertEquals(
  TypeGuardError,
)("ObjectNullable")<ObjectNullable>(ObjectNullable)(
  typia.createAssertEquals<ObjectNullable>(),
);
