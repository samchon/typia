import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_assertCloneCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
      typia.misc.assertClone<ArrayRecursiveUnionImplicit>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
