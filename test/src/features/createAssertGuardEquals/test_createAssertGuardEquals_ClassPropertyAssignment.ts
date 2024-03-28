import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertGuardEquals_ClassPropertyAssignment =
  _test_assertGuardEquals(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.createAssertGuardEquals<ClassPropertyAssignment>(),
  );
