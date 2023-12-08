import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssert_ClassMethod = _test_assert(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.createAssert<ClassMethod>());
