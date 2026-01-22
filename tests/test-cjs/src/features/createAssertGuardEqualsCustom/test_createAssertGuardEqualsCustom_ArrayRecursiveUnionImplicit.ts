import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertGuardEqualsCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
      typia.createAssertGuardEquals<ArrayRecursiveUnionImplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
