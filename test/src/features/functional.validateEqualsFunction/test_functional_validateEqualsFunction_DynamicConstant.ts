import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateEqualsFunction_DynamicConstant =
  _test_functional_validateEqualsFunction("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.validateEqualsFunction(p),
  );
