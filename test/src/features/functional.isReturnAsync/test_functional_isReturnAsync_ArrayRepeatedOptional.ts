import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_isReturnAsync_ArrayRepeatedOptional =
  (): Promise<void> =>
    _test_functional_isReturnAsync("ArrayRepeatedOptional")(
      ArrayRepeatedOptional,
    )((p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
      typia.functional.isReturn(p),
    );
