import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertFunctionCustom_TypeTagMatrix =
  _test_functional_assertFunction(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
