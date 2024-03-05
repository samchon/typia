import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertGuardCustom_ArrayRecursiveUnionExplicit =
  _test_assertGuard(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.createAssertGuard<ArrayRecursiveUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
