import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_assertEqualsCustom_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_assertEquals(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      (input) =>
        typia.assertEquals<ArrayRecursiveUnionExplicitPointer>(
          input,
          (p) => new CustomGuardError(p),
        ),
    );
