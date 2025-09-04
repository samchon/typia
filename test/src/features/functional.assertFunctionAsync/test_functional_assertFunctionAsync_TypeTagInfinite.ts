import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertFunctionAsync_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagInfinite")(
      TypeTagInfinite,
    )((p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
      typia.functional.assertFunction(p),
    );
