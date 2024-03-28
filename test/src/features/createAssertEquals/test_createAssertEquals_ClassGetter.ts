import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertEquals_ClassGetter = _test_assertEquals(
  TypeGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)(
  typia.createAssertEquals<ClassGetter>(),
);
