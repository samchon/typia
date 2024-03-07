import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ClassPropertyAssignment =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ClassPropertyAssignment",
  )(ClassPropertyAssignment)(
    (p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
      typia.functional.assertParameters(p),
  );
