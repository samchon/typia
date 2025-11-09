import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertEqualsParametersAsyncCustom_ConstantAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ConstantAtomicSimple",
    )(ConstantAtomicSimple)(
      (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
