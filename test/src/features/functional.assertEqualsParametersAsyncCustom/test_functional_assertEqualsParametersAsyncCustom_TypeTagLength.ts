import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagLength =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "TypeTagLength",
    )(TypeTagLength)((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
