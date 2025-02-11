import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_isFunctionAsync_ArrayRepeatedRequired =
  _test_functional_isFunctionAsync("ArrayRepeatedRequired")(
    ArrayRepeatedRequired,
  )((p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
    typia.functional.isFunction(p),
  );
