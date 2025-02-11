import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertParameters_ArrayHierarchical =
  _test_functional_assertParameters(TypeGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
    typia.functional.assertParameters(p),
  );
