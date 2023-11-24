import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_createAssertClone_ClassMethod = _test_misc_assertClone(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.misc.createAssertClone<ClassMethod>());
