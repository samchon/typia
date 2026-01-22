import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_createAssertGuardEqualsCustom_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.createAssertGuardEquals<ArrayRecursiveUnionExplicitPointer>(
        (p) => new CustomGuardError(p),
      ),
    );
