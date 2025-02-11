import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_isFunctionAsync_ArrayAtomicSimple =
  _test_functional_isFunctionAsync("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      typia.functional.isFunction(p),
  );
