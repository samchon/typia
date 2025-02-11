import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_assertParametersAsyncCustom_ArrayRepeatedOptional =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ArrayRepeatedOptional",
  )(ArrayRepeatedOptional)(
    (p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
