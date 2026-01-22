import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_isFunctionAsync_ArrayRepeatedOptional =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ArrayRepeatedOptional")(
      ArrayRepeatedOptional,
    )((p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
      typia.functional.isFunction(p),
    );
