import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_equalsReturn_FunctionalPropertyUnion = (): void => _test_functional_equalsReturn(
  "FunctionalPropertyUnion"
)(FunctionalPropertyUnion)(
  (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) => typia.functional.equalsReturn(p),
)