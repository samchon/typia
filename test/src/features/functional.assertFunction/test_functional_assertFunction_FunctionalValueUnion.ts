import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_FunctionalValueUnion = (): void => _test_functional_assertFunction(TypeGuardError)(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => FunctionalValueUnion) => typia.functional.assertFunction(p),
)