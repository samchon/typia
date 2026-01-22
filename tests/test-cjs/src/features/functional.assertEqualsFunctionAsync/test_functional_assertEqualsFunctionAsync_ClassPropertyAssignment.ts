import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertEqualsFunctionAsync_ClassPropertyAssignment =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ClassPropertyAssignment",
    )(ClassPropertyAssignment)(
      (
        p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>,
      ) => typia.functional.assertEqualsFunction(p),
    );
