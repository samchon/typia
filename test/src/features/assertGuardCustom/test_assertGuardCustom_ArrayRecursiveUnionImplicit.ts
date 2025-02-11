import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assertGuardCustom_ArrayRecursiveUnionImplicit =
  _test_assertGuard(CustomGuardError)(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.assertGuard<ArrayRecursiveUnionImplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
