import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_assertCustom_ArrayRecursiveUnionExplicitPointer =
  _test_assert(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) =>
      typia.assert<ArrayRecursiveUnionExplicitPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
  );
