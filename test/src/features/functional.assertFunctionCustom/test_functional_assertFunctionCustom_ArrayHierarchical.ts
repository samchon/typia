import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertFunctionCustom_ArrayHierarchical =
  _test_functional_assertFunction(CustomGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
