import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_isClone_ClassMethod = _test_misc_isClone(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) => typia.misc.isClone<ClassMethod>(input));
