import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertEqualsFunctionAsyncCustom_ArrayAtomicAlias =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ArrayAtomicAlias",
  )(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
