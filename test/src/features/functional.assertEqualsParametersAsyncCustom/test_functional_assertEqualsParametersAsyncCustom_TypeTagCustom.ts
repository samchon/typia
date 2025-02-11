import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagCustom =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TypeTagCustom",
  )(TypeTagCustom)((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
