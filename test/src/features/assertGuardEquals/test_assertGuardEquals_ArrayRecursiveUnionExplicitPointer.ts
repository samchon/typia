import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_assertGuardEquals_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_assertGuardEquals(TypeGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      (input) =>
        typia.assertGuardEquals<ArrayRecursiveUnionExplicitPointer>(input),
    );
