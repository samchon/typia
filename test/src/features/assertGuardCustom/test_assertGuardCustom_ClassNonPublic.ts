import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ClassNonPublic = _test_assertGuard(
  CustomGuardError,
)("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)((input) =>
  typia.assertGuard<ClassNonPublic>(input, (p) => new CustomGuardError(p)),
);
