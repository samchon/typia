import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ClassPropertyAssignment =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ClassPropertyAssignment",
  )(ClassPropertyAssignment)(
    (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
      typia.functional.assertEqualsParameters(p),
  );
