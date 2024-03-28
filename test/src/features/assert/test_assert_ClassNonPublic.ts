import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_assert_ClassNonPublic = _test_assert(TypeGuardError)(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)((input) =>
  typia.assert<ClassNonPublic>(input),
);
