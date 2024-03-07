import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_TypeTagPattern =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
