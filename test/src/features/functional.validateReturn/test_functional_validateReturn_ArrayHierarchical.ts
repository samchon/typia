import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateReturn_ArrayHierarchical =
  _test_functional_validateReturn("ArrayHierarchical")(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      typia.functional.validateReturn(p),
  );
