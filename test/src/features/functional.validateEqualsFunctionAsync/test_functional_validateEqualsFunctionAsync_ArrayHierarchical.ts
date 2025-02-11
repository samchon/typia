import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateEqualsFunctionAsync_ArrayHierarchical =
  _test_functional_validateEqualsFunctionAsync("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.validateEqualsFunction(p),
  );
