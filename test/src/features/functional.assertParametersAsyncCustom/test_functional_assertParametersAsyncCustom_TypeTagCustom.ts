import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_TypeTagCustom =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
