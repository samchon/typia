import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ArrayRecursiveUnionExplicit =
  _test_assertGuardEquals(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.createAssertGuardEquals<ArrayRecursiveUnionExplicit>(),
  );
