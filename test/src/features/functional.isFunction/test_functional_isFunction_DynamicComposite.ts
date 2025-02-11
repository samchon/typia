import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_isFunction_DynamicComposite = _test_functional_isFunction(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => DynamicComposite) => typia.functional.isFunction(p),
)