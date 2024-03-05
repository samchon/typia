import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateEqualsReturn_DynamicTag =
  _test_functional_validateEqualsReturn("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.validateEqualsReturn(p),
  );
