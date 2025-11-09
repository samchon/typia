import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertEqualsReturnCustom_ConstantAtomicUnion =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "ConstantAtomicUnion",
    )(ConstantAtomicUnion)(
      (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
