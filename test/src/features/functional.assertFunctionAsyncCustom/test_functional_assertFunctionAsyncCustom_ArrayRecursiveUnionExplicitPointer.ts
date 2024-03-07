import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArrayRecursiveUnionExplicitPointer =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )(ArrayRecursiveUnionExplicitPointer)(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => Promise<ArrayRecursiveUnionExplicitPointer>,
    ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
