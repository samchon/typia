import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertEqualsParametersAsyncCustom_ConstantAtomicWrapper =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ConstantAtomicWrapper",
    )(ConstantAtomicWrapper)(
      (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
