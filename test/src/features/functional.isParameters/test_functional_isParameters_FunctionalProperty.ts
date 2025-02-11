import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_isParameters_FunctionalProperty = _test_functional_isParameters(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => FunctionalProperty) => typia.functional.isParameters(p),
)