import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ArrayRepeatedRequired =
  _test_functional_assertReturn(TypeGuardError)("ArrayRepeatedRequired")(
    ArrayRepeatedRequired,
  )((p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
    typia.functional.assertReturn(p),
  );
