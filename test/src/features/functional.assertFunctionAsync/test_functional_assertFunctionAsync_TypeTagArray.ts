import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertFunctionAsync_TypeTagArray =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagArray")(
      TypeTagArray,
    )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.assertFunction(p),
    );
