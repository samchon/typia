import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertParametersAsync_ArrayAtomicAlias =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ArrayAtomicAlias")(
      ArrayAtomicAlias,
    )((p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
      typia.functional.assertParameters(p),
    );
