import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertReturnCustom_ClassPropertyAssignment =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)("ClassPropertyAssignment")(
      ClassPropertyAssignment,
    )((p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
