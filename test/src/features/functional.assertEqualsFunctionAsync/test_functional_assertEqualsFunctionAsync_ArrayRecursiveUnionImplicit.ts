import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertEqualsFunctionAsync_ArrayRecursiveUnionImplicit =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ArrayRecursiveUnionImplicit",
    )(ArrayRecursiveUnionImplicit)(
      (
        p: (
          input: ArrayRecursiveUnionImplicit,
        ) => Promise<ArrayRecursiveUnionImplicit>,
      ) => typia.functional.assertEqualsFunction(p),
    );
