import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertFunctionAsync_ArrayHierarchical =
  _test_functional_assertFunctionAsync(TypeGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.assertFunction(p),
  );
