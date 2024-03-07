import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectHttpNullable = _test_assert(
  TypeGuardError,
)("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.createAssert<ObjectHttpNullable>(),
);
