import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertReturnAsyncCustom_ConstantAtomicAbsorbed =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )(ConstantAtomicAbsorbed)(
      (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
