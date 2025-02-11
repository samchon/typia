import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_isFunction_DynamicTag =
  _test_functional_isFunction("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) => typia.functional.isFunction(p),
  );
