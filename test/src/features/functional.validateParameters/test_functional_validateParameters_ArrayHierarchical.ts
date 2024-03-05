import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateParameters_ArrayHierarchical =
  _test_functional_validateParameters("ArrayHierarchical")(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      typia.functional.validateParameters(p),
  );
