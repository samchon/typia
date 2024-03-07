import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayRecursiveUnionExplicit = _test_assert(
  CustomGuardError,
)("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
  ArrayRecursiveUnionExplicit,
)((input) =>
  typia.assert<ArrayRecursiveUnionExplicit>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
