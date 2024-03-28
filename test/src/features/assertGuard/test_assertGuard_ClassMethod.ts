import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_assertGuard_ClassMethod = _test_assertGuard(TypeGuardError)(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) => typia.assertGuard<ClassMethod>(input));
