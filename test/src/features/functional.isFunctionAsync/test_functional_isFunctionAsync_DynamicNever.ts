import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_isFunctionAsync_DynamicNever = (): Promise<void> =>
  _test_functional_isFunctionAsync("DynamicNever")(DynamicNever)(
    (p: (input: DynamicNever) => Promise<DynamicNever>) =>
      typia.functional.isFunction(p),
  );
