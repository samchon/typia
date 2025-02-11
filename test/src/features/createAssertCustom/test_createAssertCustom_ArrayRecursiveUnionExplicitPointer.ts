import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_createAssertCustom_ArrayRecursiveUnionExplicitPointer =
  _test_assert(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    typia.createAssert<ArrayRecursiveUnionExplicitPointer>(
      (p) => new CustomGuardError(p),
    ),
  );
