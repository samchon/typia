import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ArrayRecursiveUnionExplicitPointer =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )(ArrayRecursiveUnionExplicitPointer)(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => Promise<ArrayRecursiveUnionExplicitPointer>,
    ) => typia.functional.assertEqualsReturn(p),
  );
