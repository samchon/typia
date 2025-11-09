import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertParametersAsync_ClassPropertyAssignment =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ClassPropertyAssignment",
    )(ClassPropertyAssignment)(
      (
        p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>,
      ) => typia.functional.assertParameters(p),
    );
