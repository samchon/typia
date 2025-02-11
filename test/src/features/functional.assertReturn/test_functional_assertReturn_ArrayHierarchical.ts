import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertReturn_ArrayHierarchical =
  _test_functional_assertReturn(TypeGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
    typia.functional.assertReturn(p),
  );
