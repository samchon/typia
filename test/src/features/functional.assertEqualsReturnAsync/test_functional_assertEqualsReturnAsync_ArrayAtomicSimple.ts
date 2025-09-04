import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertEqualsReturnAsync_ArrayAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ArrayAtomicSimple",
    )(ArrayAtomicSimple)(
      (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
        typia.functional.assertEqualsReturn(p),
    );
