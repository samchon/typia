import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_TypeTagMatrix =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
