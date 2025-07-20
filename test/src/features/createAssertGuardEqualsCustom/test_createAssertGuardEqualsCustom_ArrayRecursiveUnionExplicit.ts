import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertGuardEqualsCustom_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.createAssertGuardEquals<ArrayRecursiveUnionExplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
