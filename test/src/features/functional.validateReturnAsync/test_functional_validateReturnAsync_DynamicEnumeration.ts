import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateReturnAsync_DynamicEnumeration =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("DynamicEnumeration")(
      DynamicEnumeration,
    )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.validateReturn(p),
    );
