import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertEqualsFunctionAsync_ArrayAtomicAlias =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ArrayAtomicAlias",
    )(ArrayAtomicAlias)(
      (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
        typia.functional.assertEqualsFunction(p),
    );
