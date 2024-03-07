import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateReturnAsync_ArrayHierarchical =
  _test_functional_validateReturnAsync("ArrayHierarchical")(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
      typia.functional.validateReturn(p),
  );
