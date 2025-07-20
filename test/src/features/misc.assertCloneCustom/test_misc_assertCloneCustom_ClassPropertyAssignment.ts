import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_assertCloneCustom_ClassPropertyAssignment = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.misc.assertClone<ClassPropertyAssignment>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
