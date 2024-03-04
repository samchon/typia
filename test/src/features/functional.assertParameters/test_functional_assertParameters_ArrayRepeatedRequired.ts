import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_assertParameters_ArrayRepeatedRequired =
  _test_functional_assertParameters(TypeGuardError)("ArrayRepeatedRequired")(
    ArrayRepeatedRequired,
  )((p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
    typia.functional.assertParameters(p),
  );
