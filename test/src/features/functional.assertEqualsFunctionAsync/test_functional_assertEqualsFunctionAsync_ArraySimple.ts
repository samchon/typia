import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsFunctionAsync_ArraySimple =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ArraySimple")(
      ArraySimple,
    )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
      typia.functional.assertEqualsFunction(p),
    );
