import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ConstantAtomicAbsorbed = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ConstantAtomicAbsorbed"
)(ConstantAtomicAbsorbed)(
  (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)