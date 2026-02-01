import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_equalsReturn_FunctionalValueUnion = (): void => _test_functional_equalsReturn(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => FunctionalValueUnion) => typia.functional.equalsReturn(p),
)