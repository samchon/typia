import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ConstantAtomicAbsorbed = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ConstantAtomicAbsorbed"
)(ConstantAtomicAbsorbed)(
  (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)