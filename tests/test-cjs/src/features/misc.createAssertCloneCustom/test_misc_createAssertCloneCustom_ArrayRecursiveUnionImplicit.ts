import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createAssertCloneCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
      typia.misc.createAssertClone<ArrayRecursiveUnionImplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
