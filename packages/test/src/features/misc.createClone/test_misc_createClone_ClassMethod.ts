import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_createClone_ClassMethod = _test_misc_clone(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.misc.createClone<ClassMethod>());
