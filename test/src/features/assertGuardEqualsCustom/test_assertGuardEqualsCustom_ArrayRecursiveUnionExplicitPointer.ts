import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_assertGuardEqualsCustom_ArrayRecursiveUnionExplicitPointer =
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) =>
      typia.assertGuardEquals<ArrayRecursiveUnionExplicitPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
  );
