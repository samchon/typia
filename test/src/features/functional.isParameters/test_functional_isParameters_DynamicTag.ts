import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_isParameters_DynamicTag = _test_functional_isParameters(
  "DynamicTag"
)(DynamicTag)(
  (p: (input: DynamicTag) => DynamicTag) => typia.functional.isParameters(p),
)