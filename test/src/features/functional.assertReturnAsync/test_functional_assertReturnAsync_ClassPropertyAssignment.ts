import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ClassPropertyAssignment = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ClassPropertyAssignment"
)(ClassPropertyAssignment)(
  (p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
    typia.functional.assertReturn(p),
)