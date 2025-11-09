import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_equalsFunction_ArrayHierarchical = (): void =>
  _test_functional_equalsFunction("ArrayHierarchical")(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      typia.functional.equalsFunction(p),
  );
