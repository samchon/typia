import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertEqualsParametersAsyncCustom_ConstantAtomicUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ConstantAtomicUnion",
  )(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
