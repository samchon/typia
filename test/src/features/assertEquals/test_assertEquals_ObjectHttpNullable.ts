import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_assertEquals_ObjectHttpNullable = _test_assertEquals(
  TypeGuardError,
)("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.assertEquals<ObjectHttpNullable>(input),
);
