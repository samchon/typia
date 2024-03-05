import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateEqualsReturn_DynamicConstant =
  _test_functional_validateEqualsReturn("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.validateEqualsReturn(p),
  );
