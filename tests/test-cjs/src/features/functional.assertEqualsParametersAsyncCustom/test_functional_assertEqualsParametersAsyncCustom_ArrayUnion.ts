import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsParametersAsyncCustom_ArrayUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ArrayUnion",
    )(ArrayUnion)((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
