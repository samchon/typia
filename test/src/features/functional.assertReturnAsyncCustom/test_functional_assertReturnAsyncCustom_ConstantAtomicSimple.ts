import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertReturnAsyncCustom_ConstantAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ConstantAtomicSimple",
    )(ConstantAtomicSimple)(
      (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
