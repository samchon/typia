import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_assertEqualsParametersAsyncCustom_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ArrayMatrix",
    )(ArrayMatrix)((p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
