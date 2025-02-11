import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_isReturnAsync_DynamicTemplate =
  _test_functional_isReturnAsync("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
      typia.functional.isReturn(p),
  );
