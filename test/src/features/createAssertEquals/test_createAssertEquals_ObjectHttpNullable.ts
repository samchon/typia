import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssertEquals_ObjectHttpNullable = _test_assertEquals(
  TypeGuardError,
)("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.createAssertEquals<ObjectHttpNullable>(),
);
