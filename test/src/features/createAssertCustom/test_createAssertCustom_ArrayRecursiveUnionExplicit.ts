import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertCustom_ArrayRecursiveUnionExplicit = _test_assert(
  CustomGuardError,
)("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
  ArrayRecursiveUnionExplicit,
)(
  typia.createAssert<ArrayRecursiveUnionExplicit>(
    (p) => new CustomGuardError(p),
  ),
);
