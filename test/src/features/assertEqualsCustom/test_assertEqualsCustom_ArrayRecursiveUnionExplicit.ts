import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_assertEqualsCustom_ArrayRecursiveUnionExplicit =
  _test_assertEquals(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
    typia.assertEquals<ArrayRecursiveUnionExplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
