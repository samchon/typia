import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayAtomicSimple =
  _test_functional_assertReturnAsync(TypeGuardError)("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
    typia.functional.assertReturn(p),
  );
