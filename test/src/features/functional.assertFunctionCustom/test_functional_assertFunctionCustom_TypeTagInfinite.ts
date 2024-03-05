import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertFunctionCustom_TypeTagInfinite =
  _test_functional_assertFunction(CustomGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
