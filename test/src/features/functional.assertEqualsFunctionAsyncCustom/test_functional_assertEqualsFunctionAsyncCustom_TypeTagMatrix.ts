import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagMatrix =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
