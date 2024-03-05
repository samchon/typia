import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_validateFunction_DynamicUndefined =
  _test_functional_validateFunction("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => DynamicUndefined) =>
      typia.functional.validateFunction(p),
  );
