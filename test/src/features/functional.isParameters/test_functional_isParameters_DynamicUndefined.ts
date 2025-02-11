import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_isParameters_DynamicUndefined = _test_functional_isParameters(
  "DynamicUndefined"
)(DynamicUndefined)(
  (p: (input: DynamicUndefined) => DynamicUndefined) => typia.functional.isParameters(p),
)