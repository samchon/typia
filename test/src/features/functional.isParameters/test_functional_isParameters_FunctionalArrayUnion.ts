import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_isParameters_FunctionalArrayUnion = _test_functional_isParameters(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.isParameters(p),
)