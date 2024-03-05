import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertGuardEquals_ArrayRecursiveUnionImplicit =
  _test_assertGuardEquals(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.createAssertGuardEquals<ArrayRecursiveUnionImplicit>(),
  );
