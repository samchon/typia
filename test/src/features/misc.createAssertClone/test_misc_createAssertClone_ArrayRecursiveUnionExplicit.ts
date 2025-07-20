import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createAssertClone_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_misc_assertClone(TypeGuardError)(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.misc.createAssertClone<ArrayRecursiveUnionExplicit>(),
    );
