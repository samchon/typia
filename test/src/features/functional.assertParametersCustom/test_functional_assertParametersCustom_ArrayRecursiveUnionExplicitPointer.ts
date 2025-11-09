import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_assertParametersCustom_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )(ArrayRecursiveUnionExplicitPointer)(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => ArrayRecursiveUnionExplicitPointer,
      ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
