import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ClassNonPublic = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "ClassNonPublic"
)(ClassNonPublic)(
  (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
    typia.functional.assertFunction(p),
)