import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertParametersAsync_ArrayAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ArrayAtomicSimple")(
      ArrayAtomicSimple,
    )((p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      typia.functional.assertParameters(p),
    );
