import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateParametersAsync_DynamicTag =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("DynamicTag")(DynamicTag)(
      (p: (input: DynamicTag) => Promise<DynamicTag>) =>
        typia.functional.validateParameters(p),
    );
