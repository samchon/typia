import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateFunction_FunctionalProperty = (): void => _test_functional_validateFunction(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => FunctionalProperty) => typia.functional.validateFunction(p),
)