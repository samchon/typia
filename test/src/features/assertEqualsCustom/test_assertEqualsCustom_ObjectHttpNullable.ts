import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectHttpNullable = _test_assertEquals(
  CustomGuardError,
)("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.assertEquals<ObjectHttpNullable>(input, (p) => new CustomGuardError(p)),
);
