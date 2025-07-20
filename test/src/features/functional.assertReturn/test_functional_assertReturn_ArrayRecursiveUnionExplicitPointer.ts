import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_assertReturn_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_functional_assertReturn(TypeGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )(ArrayRecursiveUnionExplicitPointer)(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => ArrayRecursiveUnionExplicitPointer,
      ) => typia.functional.assertReturn(p),
    );
