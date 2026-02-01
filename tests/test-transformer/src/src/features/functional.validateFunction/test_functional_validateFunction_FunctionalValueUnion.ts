import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateFunction_FunctionalValueUnion = (): void => _test_functional_validateFunction(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => FunctionalValueUnion) => typia.functional.validateFunction(p),
)