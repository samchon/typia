import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_createAssertEquals_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_assertEquals(TypeGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.createAssertEquals<ArrayRecursiveUnionExplicitPointer>(),
    );
