import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ClassPropertyAssignment =
  _test_misc_assertClone(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.misc.createAssertClone<ClassPropertyAssignment>(
      (p) => new CustomGuardError(p),
    ),
  );
