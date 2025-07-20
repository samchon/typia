import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertEqualsReturnCustom_ClassPropertyAssignment =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "ClassPropertyAssignment",
    )(ClassPropertyAssignment)(
      (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
