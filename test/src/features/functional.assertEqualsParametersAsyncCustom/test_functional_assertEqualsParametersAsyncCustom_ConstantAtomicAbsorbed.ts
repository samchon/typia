import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertEqualsParametersAsyncCustom_ConstantAtomicAbsorbed =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )(ConstantAtomicAbsorbed)(
      (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
