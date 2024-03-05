import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateEqualsFunction_DynamicTag =
  _test_functional_validateEqualsFunction("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.validateEqualsFunction(p),
  );
