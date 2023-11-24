import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_createIsClone_ClassMethod = _test_misc_isClone(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.misc.createIsClone<ClassMethod>());
