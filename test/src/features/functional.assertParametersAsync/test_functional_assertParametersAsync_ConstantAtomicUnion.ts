import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertParametersAsync_ConstantAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ConstantAtomicUnion",
    )(ConstantAtomicUnion)(
      (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
        typia.functional.assertParameters(p),
    );
