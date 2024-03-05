import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_isFunction_DynamicUnion =
  _test_functional_isFunction("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.isFunction(p),
  );
