import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_assert_ClassPropertyAssignment = _test_assert(TypeGuardError)(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
  typia.assert<ClassPropertyAssignment>(input),
);
