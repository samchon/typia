import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_isFunctionAsync_ClassNonPublic = (): Promise<void> => _test_functional_isFunctionAsync(
  "ClassNonPublic"
)(ClassNonPublic)(
  (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
    typia.functional.isFunction(p),
)