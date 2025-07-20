import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_isParametersAsync_ArrayAtomicSimple =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ArrayAtomicSimple")(ArrayAtomicSimple)(
      (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
        typia.functional.isParameters(p),
    );
