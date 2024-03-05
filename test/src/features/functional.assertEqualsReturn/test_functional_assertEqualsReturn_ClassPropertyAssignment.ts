import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertEqualsReturn_ClassPropertyAssignment =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "ClassPropertyAssignment",
  )(ClassPropertyAssignment)(
    (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
      typia.functional.assertEqualsReturn(p),
  );
