import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertEqualsParametersAsyncCustom_ArrayAtomicAlias =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ArrayAtomicAlias",
    )(ArrayAtomicAlias)(
      (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
