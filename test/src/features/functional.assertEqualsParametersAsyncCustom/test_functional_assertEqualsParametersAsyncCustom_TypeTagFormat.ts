import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "TypeTagFormat",
    )(TypeTagFormat)((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
