import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertGuard_ClassPropertyAssignment = _test_assertGuard(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
  typia.assertGuard<ClassPropertyAssignment>(input),
);
