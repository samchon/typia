import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertEqualsParameters_ArrayRecursive = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertEqualsParameters(p),
  );
