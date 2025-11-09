import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateEqualsReturn_FunctionalProperty = (): void => _test_functional_validateEqualsReturn(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => FunctionalProperty) => typia.functional.validateEqualsReturn(p),
)