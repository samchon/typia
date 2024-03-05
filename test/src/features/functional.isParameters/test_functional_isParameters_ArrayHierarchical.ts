import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_isParameters_ArrayHierarchical =
  _test_functional_isParameters("ArrayHierarchical")(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      typia.functional.isParameters(p),
  );
