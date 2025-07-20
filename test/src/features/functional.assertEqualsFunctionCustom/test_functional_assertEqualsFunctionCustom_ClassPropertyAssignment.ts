import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertEqualsFunctionCustom_ClassPropertyAssignment =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "ClassPropertyAssignment",
    )(ClassPropertyAssignment)(
      (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
