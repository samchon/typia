import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateEqualsReturn_FunctionalValueUnion = (): void => _test_functional_validateEqualsReturn(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => FunctionalValueUnion) => typia.functional.validateEqualsReturn(p),
)