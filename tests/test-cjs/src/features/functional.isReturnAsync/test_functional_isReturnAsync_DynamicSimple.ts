import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_isReturnAsync_DynamicSimple = (): Promise<void> =>
  _test_functional_isReturnAsync("DynamicSimple")(DynamicSimple)(
    (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
      typia.functional.isReturn(p),
  );
