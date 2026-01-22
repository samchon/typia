import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_isReturnAsync_DynamicUnion = (): Promise<void> =>
  _test_functional_isReturnAsync("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      typia.functional.isReturn(p),
  );
