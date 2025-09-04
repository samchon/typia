import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertFunctionAsync_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagPattern")(
      TypeTagPattern,
    )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.assertFunction(p),
    );
