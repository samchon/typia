import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createAssertClone_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_misc_assertClone(TypeGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
      typia.misc.createAssertClone<ArrayRecursiveUnionImplicit>(),
    );
