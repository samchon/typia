import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_isFunctionAsync_ArrayRepeatedUnion =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ArrayRepeatedUnion")(ArrayRepeatedUnion)(
      (p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
        typia.functional.isFunction(p),
    );
