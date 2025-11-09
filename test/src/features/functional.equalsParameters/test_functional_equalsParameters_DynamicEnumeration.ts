import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_equalsParameters_DynamicEnumeration = (): void => _test_functional_equalsParameters(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => DynamicEnumeration) => typia.functional.equalsParameters(p),
)