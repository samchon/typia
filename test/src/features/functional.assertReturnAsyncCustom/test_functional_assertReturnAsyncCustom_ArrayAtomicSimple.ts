import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertReturnAsyncCustom_ArrayAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ArrayAtomicSimple")(
      ArrayAtomicSimple,
    )((p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
