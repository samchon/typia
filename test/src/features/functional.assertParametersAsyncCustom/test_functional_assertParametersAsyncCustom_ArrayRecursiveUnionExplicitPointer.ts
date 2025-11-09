import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_assertParametersAsyncCustom_ArrayRecursiveUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )(ArrayRecursiveUnionExplicitPointer)(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => Promise<ArrayRecursiveUnionExplicitPointer>,
      ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
