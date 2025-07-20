import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_isFunctionAsync_DynamicUnion = (): Promise<void> =>
  _test_functional_isFunctionAsync("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      typia.functional.isFunction(p),
  );
