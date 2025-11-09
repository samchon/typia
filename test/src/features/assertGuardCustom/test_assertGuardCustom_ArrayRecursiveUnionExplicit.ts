import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_assertGuardCustom_ArrayRecursiveUnionExplicit = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
    typia.assertGuard<ArrayRecursiveUnionExplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
