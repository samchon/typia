import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_assertClone_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_misc_assertClone(TypeGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      (input) =>
        typia.misc.assertClone<ArrayRecursiveUnionExplicitPointer>(input),
    );
