import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_validateEqualsReturnAsync_ArrayAtomicSimple =
  _test_functional_validateEqualsReturnAsync("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
    typia.functional.validateEqualsReturn(p),
  );
