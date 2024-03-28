import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssert_ClassPropertyAssignment = _test_assert(
  TypeGuardError,
)("ClassPropertyAssignment")<ClassPropertyAssignment>(ClassPropertyAssignment)(
  typia.createAssert<ClassPropertyAssignment>(),
);
