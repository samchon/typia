import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateEqualsParametersAsync_DynamicTag =
  _test_functional_validateEqualsParametersAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.validateEqualsParameters(p),
  );
