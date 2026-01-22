import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertFunctionAsyncCustom_TypeTagArray =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagArray")(
      TypeTagArray,
    )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
