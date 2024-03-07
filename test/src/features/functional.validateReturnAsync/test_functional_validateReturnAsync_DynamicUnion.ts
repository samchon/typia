import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateReturnAsync_DynamicUnion =
  _test_functional_validateReturnAsync("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      typia.functional.validateReturn(p),
  );
