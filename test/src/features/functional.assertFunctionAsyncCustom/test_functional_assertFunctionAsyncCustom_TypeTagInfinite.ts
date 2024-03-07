import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_TypeTagInfinite =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
