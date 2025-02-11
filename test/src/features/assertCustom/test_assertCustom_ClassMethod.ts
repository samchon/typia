import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_assertCustom_ClassMethod = _test_assert(CustomGuardError)(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  typia.assert<ClassMethod>(input, (p) => new CustomGuardError(p)),
);
