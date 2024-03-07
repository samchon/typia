import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ClassMethod = _test_assertEquals(
  CustomGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
  typia.assertEquals<ClassMethod>(input, (p) => new CustomGuardError(p)),
);
