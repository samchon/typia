import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_assertParametersAsync_ArrayRepeatedOptional =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ArrayRepeatedOptional",
  )(ArrayRepeatedOptional)(
    (p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
      typia.functional.assertParameters(p),
  );
