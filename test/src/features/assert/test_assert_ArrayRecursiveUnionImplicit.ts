import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assert_ArrayRecursiveUnionImplicit = (): void =>
  _test_assert(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.assert<ArrayRecursiveUnionImplicit>(input),
  );
