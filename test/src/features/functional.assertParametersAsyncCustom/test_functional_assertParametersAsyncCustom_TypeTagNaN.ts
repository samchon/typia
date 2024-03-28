import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertParametersAsyncCustom_TypeTagNaN =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
