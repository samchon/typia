import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateEqualsReturn_ArrayHierarchical =
  (): void =>
    _test_functional_validateEqualsReturn("ArrayHierarchical")(
      ArrayHierarchical,
    )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      typia.functional.validateEqualsReturn(p),
    );
