import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectNullable = _test_assertEquals(
  CustomGuardError,
)("ObjectNullable")<ObjectNullable>(ObjectNullable)((input) =>
  typia.assertEquals<ObjectNullable>(input, (p) => new CustomGuardError(p)),
);
