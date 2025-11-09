import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_validateEqualsReturnAsync_ArrayAtomicAlias = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ArrayAtomicAlias"
)(ArrayAtomicAlias)(
  (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
    typia.functional.validateEqualsReturn(p),
)