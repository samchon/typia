import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TypeTagAtomicUnion = (): void => _test_functional_assertFunction(CustomGuardError)(
  "TypeTagAtomicUnion"
)(TypeTagAtomicUnion)(
  (p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)