import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_isReturnAsync_ArrayAtomicSimple = (): Promise<void> => _test_functional_isReturnAsync(
  "ArrayAtomicSimple"
)(ArrayAtomicSimple)(
  (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
    typia.functional.isReturn(p),
)