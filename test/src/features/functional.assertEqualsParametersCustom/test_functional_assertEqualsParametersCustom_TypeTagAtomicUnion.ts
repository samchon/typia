import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TypeTagAtomicUnion = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "TypeTagAtomicUnion"
)(TypeTagAtomicUnion)(
  (p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)