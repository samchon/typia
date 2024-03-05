import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_createAssert_ArrayRecursiveUnionExplicitPointer =
  _test_assert(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    typia.createAssert<ArrayRecursiveUnionExplicitPointer>(),
  );
