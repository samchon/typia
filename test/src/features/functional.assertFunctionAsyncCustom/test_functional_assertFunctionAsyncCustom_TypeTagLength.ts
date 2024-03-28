import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertFunctionAsyncCustom_TypeTagLength =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
