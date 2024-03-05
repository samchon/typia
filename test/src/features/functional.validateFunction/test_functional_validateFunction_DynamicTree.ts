import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_validateFunction_DynamicTree =
  _test_functional_validateFunction("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) =>
      typia.functional.validateFunction(p),
  );
