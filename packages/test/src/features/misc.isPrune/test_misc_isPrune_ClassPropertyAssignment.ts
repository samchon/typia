import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_isPrune_ClassPropertyAssignment = _test_misc_isPrune(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
  typia.misc.isPrune<ClassPropertyAssignment>(input),
);
