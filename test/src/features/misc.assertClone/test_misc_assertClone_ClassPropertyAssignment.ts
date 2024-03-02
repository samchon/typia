import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_assertClone_ClassPropertyAssignment =
  _test_misc_assertClone(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.misc.assertClone<ClassPropertyAssignment>(input),
  );
