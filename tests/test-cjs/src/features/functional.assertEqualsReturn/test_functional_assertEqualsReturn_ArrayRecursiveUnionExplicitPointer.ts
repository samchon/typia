import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_assertEqualsReturn_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )(ArrayRecursiveUnionExplicitPointer)(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => ArrayRecursiveUnionExplicitPointer,
      ) => typia.functional.assertEqualsReturn(p),
    );
