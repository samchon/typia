import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_assertGuardCustom_ClassNonPublic = _test_assertGuard(
  CustomGuardError,
)("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)((input) =>
  typia.assertGuard<ClassNonPublic>(input, (p) => new CustomGuardError(p)),
);
