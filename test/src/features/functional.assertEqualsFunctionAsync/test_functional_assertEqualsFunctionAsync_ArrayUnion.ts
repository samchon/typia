import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsFunctionAsync_ArrayUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ArrayUnion")(
      ArrayUnion,
    )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.assertEqualsFunction(p),
    );
