import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertCustom_ArrayRecursiveUnionImplicit = _test_assert(
  CustomGuardError,
)("ArrayRecursiveUnionImplicit")<ArrayRecursiveUnionImplicit>(
  ArrayRecursiveUnionImplicit,
)(
  typia.createAssert<ArrayRecursiveUnionImplicit>(
    (p) => new CustomGuardError(p),
  ),
);
