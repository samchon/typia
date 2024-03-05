import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_isParameters_ArrayRepeatedNullable =
  _test_functional_isParameters("ArrayRepeatedNullable")(ArrayRepeatedNullable)(
    (p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
      typia.functional.isParameters(p),
  );
