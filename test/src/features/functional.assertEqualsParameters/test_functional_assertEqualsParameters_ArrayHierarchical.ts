import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertEqualsParameters_ArrayHierarchical =
  _test_functional_assertEqualsParameters(TypeGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
    typia.functional.assertEqualsParameters(p),
  );
