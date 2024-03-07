import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ClassMethod = _test_assert(
  CustomGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)(
  typia.createAssert<ClassMethod>((p) => new CustomGuardError(p)),
);
