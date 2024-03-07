import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_equalsParametersAsync_DynamicTag =
  _test_functional_equalsParametersAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.equalsParameters(p),
  );
