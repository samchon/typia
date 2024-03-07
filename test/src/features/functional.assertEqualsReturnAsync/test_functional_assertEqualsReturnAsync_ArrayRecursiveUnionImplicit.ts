import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ArrayRecursiveUnionImplicit =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )(ArrayRecursiveUnionImplicit)(
    (
      p: (
        input: ArrayRecursiveUnionImplicit,
      ) => Promise<ArrayRecursiveUnionImplicit>,
    ) => typia.functional.assertEqualsReturn(p),
  );
