import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertFunctionAsync_TypeTagRange =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagRange")(
      TypeTagRange,
    )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.assertFunction(p),
    );
