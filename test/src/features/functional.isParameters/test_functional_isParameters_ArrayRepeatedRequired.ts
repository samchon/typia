import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_isParameters_ArrayRepeatedRequired = (): void =>
  _test_functional_isParameters("ArrayRepeatedRequired")(ArrayRepeatedRequired)(
    (p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
      typia.functional.isParameters(p),
  );
