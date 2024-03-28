import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertFunctionCustom_TypeTagLength =
  _test_functional_assertFunction(CustomGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
