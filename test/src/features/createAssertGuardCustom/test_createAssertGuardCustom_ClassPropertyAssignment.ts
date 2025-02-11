import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertGuardCustom_ClassPropertyAssignment =
  _test_assertGuard(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.createAssertGuard<ClassPropertyAssignment>(
      (p) => new CustomGuardError(p),
    ),
  );
