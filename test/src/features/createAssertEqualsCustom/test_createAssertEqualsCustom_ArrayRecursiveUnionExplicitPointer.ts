import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ArrayRecursiveUnionExplicitPointer =
  _test_assertEquals(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    typia.createAssertEquals<ArrayRecursiveUnionExplicitPointer>(
      (p) => new CustomGuardError(p),
    ),
  );
