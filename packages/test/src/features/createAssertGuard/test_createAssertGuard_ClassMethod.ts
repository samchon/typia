import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertGuard_ClassMethod = _test_assertGuard(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.createAssertGuard<ClassMethod>());
