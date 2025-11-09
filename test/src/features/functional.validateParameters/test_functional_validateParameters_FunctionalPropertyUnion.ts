import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_validateParameters_FunctionalPropertyUnion = (): void => _test_functional_validateParameters(
  "FunctionalPropertyUnion"
)(FunctionalPropertyUnion)(
  (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) => typia.functional.validateParameters(p),
)