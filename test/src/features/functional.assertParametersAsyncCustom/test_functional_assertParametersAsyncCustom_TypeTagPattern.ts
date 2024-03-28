import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertParametersAsyncCustom_TypeTagPattern =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
