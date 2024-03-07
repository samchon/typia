import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ArrayRecursiveUnionExplicitPointer =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )(ArrayRecursiveUnionExplicitPointer)(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => ArrayRecursiveUnionExplicitPointer,
    ) => typia.functional.assertEqualsReturn(p),
  );
