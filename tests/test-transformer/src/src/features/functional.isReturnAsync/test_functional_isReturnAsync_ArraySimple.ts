import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_isReturnAsync_ArraySimple = (): Promise<void> => _test_functional_isReturnAsync(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.isReturn(p),
)