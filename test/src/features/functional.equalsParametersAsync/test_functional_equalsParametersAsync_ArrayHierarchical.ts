import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_equalsParametersAsync_ArrayHierarchical =
  _test_functional_equalsParametersAsync("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.equalsParameters(p),
  );
