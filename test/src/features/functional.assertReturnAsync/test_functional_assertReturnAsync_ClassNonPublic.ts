import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ClassNonPublic = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ClassNonPublic"
)(ClassNonPublic)(
  (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
    typia.functional.assertReturn(p),
)