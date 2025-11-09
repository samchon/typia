import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertEqualsParameters_ClassPropertyAssignment =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ClassPropertyAssignment",
    )(ClassPropertyAssignment)(
      (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
        typia.functional.assertEqualsParameters(p),
    );
