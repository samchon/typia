import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_equalsParameters_FunctionalProperty = _test_functional_equalsParameters(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => FunctionalProperty) => typia.functional.equalsParameters(p),
)