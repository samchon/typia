import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ArrayRecursiveUnionExplicit =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (
      p: (
        input: ArrayRecursiveUnionExplicit,
      ) => Promise<ArrayRecursiveUnionExplicit>,
    ) => typia.functional.assertEqualsFunction(p),
  );
