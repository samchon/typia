import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_assertGuard_ClassNonPublic = _test_assertGuard(
  TypeGuardError,
)("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)((input) =>
  typia.assertGuard<ClassNonPublic>(input),
);
