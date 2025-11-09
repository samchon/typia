import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_isFunctionAsync_ClassPropertyAssignment = (): Promise<void> => _test_functional_isFunctionAsync(
  "ClassPropertyAssignment"
)(ClassPropertyAssignment)(
  (p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
    typia.functional.isFunction(p),
)