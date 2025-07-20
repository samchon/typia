import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_assertCloneCustom_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
      typia.misc.assertClone<ArrayRecursiveUnionExplicit>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
