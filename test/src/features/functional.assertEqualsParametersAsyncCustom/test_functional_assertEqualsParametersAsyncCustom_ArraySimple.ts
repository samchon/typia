import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsParametersAsyncCustom_ArraySimple =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
