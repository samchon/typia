import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ArrayAtomicSimple =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
    typia.functional.assertEqualsReturn(p),
  );
