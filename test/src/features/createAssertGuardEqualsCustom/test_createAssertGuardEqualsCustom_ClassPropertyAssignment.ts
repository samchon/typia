import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertGuardEqualsCustom_ClassPropertyAssignment =
  _test_assertGuardEquals(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.createAssertGuardEquals<ClassPropertyAssignment>(
      (p) => new CustomGuardError(p),
    ),
  );
