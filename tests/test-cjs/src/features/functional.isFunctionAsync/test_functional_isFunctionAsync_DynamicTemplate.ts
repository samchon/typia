import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_isFunctionAsync_DynamicTemplate =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("DynamicTemplate")(DynamicTemplate)(
      (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
        typia.functional.isFunction(p),
    );
