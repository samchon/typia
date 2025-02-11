import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertGuard_ClassPropertyAssignment = _test_assertGuard(
  TypeGuardError,
)("ClassPropertyAssignment")<ClassPropertyAssignment>(ClassPropertyAssignment)(
  typia.createAssertGuard<ClassPropertyAssignment>(),
);
