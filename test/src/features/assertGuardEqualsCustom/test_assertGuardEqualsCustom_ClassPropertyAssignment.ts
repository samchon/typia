import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ClassPropertyAssignment =
  _test_assertGuardEquals(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.assertGuardEquals<ClassPropertyAssignment>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
