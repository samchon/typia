import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertParametersAsyncCustom_ClassPropertyAssignment =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ClassPropertyAssignment",
  )(ClassPropertyAssignment)(
    (p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
