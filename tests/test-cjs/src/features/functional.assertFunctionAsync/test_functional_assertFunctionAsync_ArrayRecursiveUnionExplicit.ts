import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertFunctionAsync_ArrayRecursiveUnionExplicit =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ArrayRecursiveUnionExplicit",
    )(ArrayRecursiveUnionExplicit)(
      (
        p: (
          input: ArrayRecursiveUnionExplicit,
        ) => Promise<ArrayRecursiveUnionExplicit>,
      ) => typia.functional.assertFunction(p),
    );
