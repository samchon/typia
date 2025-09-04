import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertFunctionAsyncCustom_TypeTagDefault =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagDefault")(
      TypeTagDefault,
    )((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
