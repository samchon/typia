import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ArrayRecursiveUnionExplicitPointer =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )(ArrayRecursiveUnionExplicitPointer)(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => Promise<ArrayRecursiveUnionExplicitPointer>,
    ) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
