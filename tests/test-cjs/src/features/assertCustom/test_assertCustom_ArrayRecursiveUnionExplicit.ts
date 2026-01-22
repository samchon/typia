import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_assertCustom_ArrayRecursiveUnionExplicit = (): void =>
  _test_assert(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
    typia.assert<ArrayRecursiveUnionExplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
