import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagRange =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "TypeTagRange",
    )(TypeTagRange)((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
