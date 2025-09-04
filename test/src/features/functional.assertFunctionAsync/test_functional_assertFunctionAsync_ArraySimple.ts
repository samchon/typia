import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertFunctionAsync_ArraySimple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ArraySimple")(
      ArraySimple,
    )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
      typia.functional.assertFunction(p),
    );
