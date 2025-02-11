import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_equalsFunction_FunctionalProperty = _test_functional_equalsFunction(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => FunctionalProperty) => typia.functional.equalsFunction(p),
)