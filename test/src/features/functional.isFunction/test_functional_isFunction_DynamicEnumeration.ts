import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_isFunction_DynamicEnumeration =
  _test_functional_isFunction("DynamicEnumeration")(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => DynamicEnumeration) =>
      typia.functional.isFunction(p),
  );
