import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayRecursiveUnionExplicit =
  _test_functional_assertReturnAsync(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (
      p: (
        input: ArrayRecursiveUnionExplicit,
      ) => Promise<ArrayRecursiveUnionExplicit>,
    ) => typia.functional.assertReturn(p),
  );
