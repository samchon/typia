import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_validateReturnAsync_ArrayRepeatedOptional =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ArrayRepeatedOptional")(
      ArrayRepeatedOptional,
    )((p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
      typia.functional.validateReturn(p),
    );
