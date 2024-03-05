import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_isFunction_ArrayHierarchical =
  _test_functional_isFunction("ArrayHierarchical")(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      typia.functional.isFunction(p),
  );
