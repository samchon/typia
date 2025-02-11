import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_equalsParameters_DynamicTemplate = _test_functional_equalsParameters(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => DynamicTemplate) => typia.functional.equalsParameters(p),
)