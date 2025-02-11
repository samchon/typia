import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertEqualsCustom_ArrayRecursiveUnionExplicit =
  _test_assertEquals(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.createAssertEquals<ArrayRecursiveUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
