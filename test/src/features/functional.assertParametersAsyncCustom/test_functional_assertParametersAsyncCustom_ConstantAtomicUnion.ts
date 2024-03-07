import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ConstantAtomicUnion =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ConstantAtomicUnion",
  )(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
