import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateEqualsParameters_ArrayHierarchicalPointer =
  (): void =>
    _test_functional_validateEqualsParameters("ArrayHierarchicalPointer")(
      ArrayHierarchicalPointer,
    )((p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
      typia.functional.validateEqualsParameters(p),
    );
