import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertParameters_ClassPropertyAssignment =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)(
      "ClassPropertyAssignment",
    )(ClassPropertyAssignment)(
      (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
        typia.functional.assertParameters(p),
    );
