import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertParametersAsyncCustom_TypeTagRange =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
