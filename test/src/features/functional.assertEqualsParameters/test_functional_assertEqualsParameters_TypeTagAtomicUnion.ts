import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TypeTagAtomicUnion = _test_functional_assertEqualsParameters(TypeGuardError)(
  "TypeTagAtomicUnion"
)(TypeTagAtomicUnion)(
  (p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) => typia.functional.assertEqualsParameters(p),
)