import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertGuardCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_assertGuard(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
      typia.createAssertGuard<ArrayRecursiveUnionImplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
