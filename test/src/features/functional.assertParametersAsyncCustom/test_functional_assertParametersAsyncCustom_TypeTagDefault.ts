import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertParametersAsyncCustom_TypeTagDefault =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
