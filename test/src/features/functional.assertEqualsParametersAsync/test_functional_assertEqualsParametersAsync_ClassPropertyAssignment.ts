import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertEqualsParametersAsync_ClassPropertyAssignment =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ClassPropertyAssignment",
    )(ClassPropertyAssignment)(
      (
        p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>,
      ) => typia.functional.assertEqualsParameters(p),
    );
