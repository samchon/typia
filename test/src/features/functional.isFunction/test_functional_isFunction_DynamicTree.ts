import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_isFunction_DynamicTree = (): void =>
  _test_functional_isFunction("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) => typia.functional.isFunction(p),
  );
