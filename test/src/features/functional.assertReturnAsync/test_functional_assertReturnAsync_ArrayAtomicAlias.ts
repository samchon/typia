import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertReturnAsync_ArrayAtomicAlias =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ArrayAtomicAlias")(
      ArrayAtomicAlias,
    )((p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
      typia.functional.assertReturn(p),
    );
