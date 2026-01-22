import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertParametersAsyncCustom_TypeTagLength =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("TypeTagLength")(
      TypeTagLength,
    )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
