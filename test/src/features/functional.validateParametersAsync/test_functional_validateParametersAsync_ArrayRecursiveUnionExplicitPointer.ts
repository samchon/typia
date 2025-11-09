import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_validateParametersAsync_ArrayRecursiveUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_validateParametersAsync(
      "ArrayRecursiveUnionExplicitPointer",
    )(ArrayRecursiveUnionExplicitPointer)(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => Promise<ArrayRecursiveUnionExplicitPointer>,
      ) => typia.functional.validateParameters(p),
    );
