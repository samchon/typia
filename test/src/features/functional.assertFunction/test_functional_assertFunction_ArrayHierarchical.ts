import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertFunction_ArrayHierarchical = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
    typia.functional.assertFunction(p),
  );
