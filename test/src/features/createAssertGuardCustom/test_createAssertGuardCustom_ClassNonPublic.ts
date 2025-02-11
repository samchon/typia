import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_createAssertGuardCustom_ClassNonPublic = _test_assertGuard(
  CustomGuardError,
)("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)(
  typia.createAssertGuard<ClassNonPublic>((p) => new CustomGuardError(p)),
);
