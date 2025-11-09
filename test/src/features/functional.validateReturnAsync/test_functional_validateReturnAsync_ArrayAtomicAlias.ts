import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_validateReturnAsync_ArrayAtomicAlias =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ArrayAtomicAlias")(ArrayAtomicAlias)(
      (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
        typia.functional.validateReturn(p),
    );
