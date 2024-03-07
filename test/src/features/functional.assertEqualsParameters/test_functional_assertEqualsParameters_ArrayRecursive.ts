import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ArrayRecursive =
  _test_functional_assertEqualsParameters(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertEqualsParameters(p),
  );
