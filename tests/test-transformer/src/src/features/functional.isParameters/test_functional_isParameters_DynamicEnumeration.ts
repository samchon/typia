import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_isParameters_DynamicEnumeration = (): void => _test_functional_isParameters(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => DynamicEnumeration) => typia.functional.isParameters(p),
)