import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_isParameters_FunctionalValueUnion = (): void => _test_functional_isParameters(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => FunctionalValueUnion) => typia.functional.isParameters(p),
)