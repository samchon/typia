import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ConstantAtomicUnion = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ConstantAtomicUnion"
)(ConstantAtomicUnion)(
  (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)