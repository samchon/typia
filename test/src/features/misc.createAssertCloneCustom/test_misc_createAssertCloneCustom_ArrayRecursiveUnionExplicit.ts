import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createAssertCloneCustom_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.misc.createAssertClone<ArrayRecursiveUnionExplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
