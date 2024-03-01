import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_createAssertPruneCustom_ClassPropertyAssignment =
  _test_misc_assertPrune(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.misc.createAssertPrune<ClassPropertyAssignment>(
      (p) => new CustomGuardError(p),
    ),
  );
