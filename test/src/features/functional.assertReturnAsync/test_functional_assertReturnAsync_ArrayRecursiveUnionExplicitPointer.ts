import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayRecursiveUnionExplicitPointer =
  _test_functional_assertReturnAsync(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )(ArrayRecursiveUnionExplicitPointer)(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => Promise<ArrayRecursiveUnionExplicitPointer>,
    ) => typia.functional.assertReturn(p),
  );
