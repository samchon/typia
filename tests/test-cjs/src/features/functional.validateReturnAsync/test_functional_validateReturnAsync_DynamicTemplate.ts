import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateReturnAsync_DynamicTemplate =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("DynamicTemplate")(DynamicTemplate)(
      (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
        typia.functional.validateReturn(p),
    );
