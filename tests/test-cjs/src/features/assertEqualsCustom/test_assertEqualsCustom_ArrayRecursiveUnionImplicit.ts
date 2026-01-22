import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assertEqualsCustom_ArrayRecursiveUnionImplicit = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.assertEquals<ArrayRecursiveUnionImplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
