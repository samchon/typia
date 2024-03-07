import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_isParametersAsync_ArrayRepeatedOptional =
  _test_functional_isParametersAsync("ArrayRepeatedOptional")(
    ArrayRepeatedOptional,
  )((p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
    typia.functional.isParameters(p),
  );
