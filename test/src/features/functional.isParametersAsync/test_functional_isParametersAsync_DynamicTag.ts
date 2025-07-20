import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_isParametersAsync_DynamicTag = (): Promise<void> =>
  _test_functional_isParametersAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.isParameters(p),
  );
