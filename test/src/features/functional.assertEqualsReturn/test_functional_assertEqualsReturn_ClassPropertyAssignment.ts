import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ClassPropertyAssignment = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ClassPropertyAssignment"
)(ClassPropertyAssignment)(
  (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) => typia.functional.assertEqualsReturn(p),
)