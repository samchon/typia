import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_validateReturn_ArrayRepeatedRequired =
  _test_functional_validateReturn("ArrayRepeatedRequired")(
    ArrayRepeatedRequired,
  )((p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
    typia.functional.validateReturn(p),
  );
