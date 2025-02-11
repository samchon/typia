import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_isParameters_DynamicSimple = _test_functional_isParameters(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => DynamicSimple) => typia.functional.isParameters(p),
)