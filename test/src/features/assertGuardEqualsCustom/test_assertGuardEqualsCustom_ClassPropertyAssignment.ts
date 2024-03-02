import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertGuardEqualsCustom_ClassPropertyAssignment =
  _test_assertGuardEquals(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.assertGuardEquals<ClassPropertyAssignment>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
