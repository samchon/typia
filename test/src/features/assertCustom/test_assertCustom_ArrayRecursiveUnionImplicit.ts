import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assertCustom_ArrayRecursiveUnionImplicit = (): void =>
  _test_assert(CustomGuardError)(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.assert<ArrayRecursiveUnionImplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
