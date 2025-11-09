import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertParametersAsyncCustom_ArrayRepeatedNullable =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ArrayRepeatedNullable",
    )(ArrayRepeatedNullable)(
      (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
