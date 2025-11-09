import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertFunctionAsync_ArrayRecursiveUnionImplicit =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ArrayRecursiveUnionImplicit",
    )(ArrayRecursiveUnionImplicit)(
      (
        p: (
          input: ArrayRecursiveUnionImplicit,
        ) => Promise<ArrayRecursiveUnionImplicit>,
      ) => typia.functional.assertFunction(p),
    );
