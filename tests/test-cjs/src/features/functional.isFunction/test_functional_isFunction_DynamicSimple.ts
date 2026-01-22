import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_isFunction_DynamicSimple = (): void =>
  _test_functional_isFunction("DynamicSimple")(DynamicSimple)(
    (p: (input: DynamicSimple) => DynamicSimple) =>
      typia.functional.isFunction(p),
  );
