import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssert_ClassGetter = _test_assert(TypeGuardError)(
  "ClassGetter",
)<ClassGetter>(ClassGetter)(typia.createAssert<ClassGetter>());
