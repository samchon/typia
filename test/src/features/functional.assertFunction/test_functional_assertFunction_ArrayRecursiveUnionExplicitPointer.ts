import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_assertFunction_ArrayRecursiveUnionExplicitPointer =
  _test_functional_assertFunction(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )(ArrayRecursiveUnionExplicitPointer)(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => ArrayRecursiveUnionExplicitPointer,
    ) => typia.functional.assertFunction(p),
  );
