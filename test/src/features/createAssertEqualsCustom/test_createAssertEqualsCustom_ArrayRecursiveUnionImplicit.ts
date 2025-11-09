import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertEqualsCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_assertEquals(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
      typia.createAssertEquals<ArrayRecursiveUnionImplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
