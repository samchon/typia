import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertEqualsReturnAsyncCustom_ArrayAtomicSimple =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ArrayAtomicSimple",
  )(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
