import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateFunctionAsync_ArrayHierarchical =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ArrayHierarchical")(
      ArrayHierarchical,
    )((p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
      typia.functional.validateFunction(p),
    );
