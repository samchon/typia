import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_equalsReturn_DynamicConstant =
  _test_functional_equalsReturn("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.equalsReturn(p),
  );
