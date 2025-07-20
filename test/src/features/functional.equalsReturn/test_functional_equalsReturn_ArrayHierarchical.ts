import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_equalsReturn_ArrayHierarchical = (): void =>
  _test_functional_equalsReturn("ArrayHierarchical")(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      typia.functional.equalsReturn(p),
  );
