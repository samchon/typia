import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ClassPropertyAssignment =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ClassPropertyAssignment",
  )(ClassPropertyAssignment)(
    (p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
