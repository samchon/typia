import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertReturnAsyncCustom_ArrayRepeatedNullable =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ArrayRepeatedNullable",
    )(ArrayRepeatedNullable)(
      (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
