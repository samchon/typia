import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_assert_ClassMethod = _test_assert(TypeGuardError)(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) => typia.assert<ClassMethod>(input));
