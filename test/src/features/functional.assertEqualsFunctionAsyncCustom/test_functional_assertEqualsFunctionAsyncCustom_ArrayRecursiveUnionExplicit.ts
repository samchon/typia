import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertEqualsFunctionAsyncCustom_ArrayRecursiveUnionExplicit =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (
      p: (
        input: ArrayRecursiveUnionExplicit,
      ) => Promise<ArrayRecursiveUnionExplicit>,
    ) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
