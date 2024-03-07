import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_validateParametersAsync_ArrayRepeatedOptional =
  _test_functional_validateParametersAsync("ArrayRepeatedOptional")(
    ArrayRepeatedOptional,
  )((p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
    typia.functional.validateParameters(p),
  );
