import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_validateEqualsParametersAsync_ArrayAtomicSimple =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ArrayAtomicSimple")(
      ArrayAtomicSimple,
    )((p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      typia.functional.validateEqualsParameters(p),
    );
