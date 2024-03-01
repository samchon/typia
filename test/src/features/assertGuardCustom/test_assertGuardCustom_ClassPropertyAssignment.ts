import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertGuardCustom_ClassPropertyAssignment = _test_assertGuard(
  CustomGuardError,
)("ClassPropertyAssignment")<ClassPropertyAssignment>(ClassPropertyAssignment)(
  (input) =>
    typia.assertGuard<ClassPropertyAssignment>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
