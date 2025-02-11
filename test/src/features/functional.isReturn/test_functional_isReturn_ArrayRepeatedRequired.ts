import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_isReturn_ArrayRepeatedRequired =
  _test_functional_isReturn("ArrayRepeatedRequired")(ArrayRepeatedRequired)(
    (p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
      typia.functional.isReturn(p),
  );
