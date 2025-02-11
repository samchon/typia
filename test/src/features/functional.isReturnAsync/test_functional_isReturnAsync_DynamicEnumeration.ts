import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_isReturnAsync_DynamicEnumeration =
  _test_functional_isReturnAsync("DynamicEnumeration")(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.isReturn(p),
  );
