import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ClassPropertyAssignment = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ClassPropertyAssignment"
)(ClassPropertyAssignment)(
  (p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)