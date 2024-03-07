import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ArrayRecursiveUnionExplicitPointer =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )(ArrayRecursiveUnionExplicitPointer)(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => Promise<ArrayRecursiveUnionExplicitPointer>,
    ) => typia.functional.assertEqualsFunction(p),
  );
