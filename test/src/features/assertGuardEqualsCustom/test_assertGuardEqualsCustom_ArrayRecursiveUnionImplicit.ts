import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assertGuardEqualsCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
      typia.assertGuardEquals<ArrayRecursiveUnionImplicit>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
