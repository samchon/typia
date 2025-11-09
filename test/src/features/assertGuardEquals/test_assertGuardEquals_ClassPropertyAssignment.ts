import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertGuardEquals_ClassPropertyAssignment = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.assertGuardEquals<ClassPropertyAssignment>(input),
  );
