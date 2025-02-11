import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertFunctionAsyncCustom_TypeTagRange =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
