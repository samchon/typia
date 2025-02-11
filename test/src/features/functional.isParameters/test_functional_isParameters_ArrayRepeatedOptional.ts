import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_isParameters_ArrayRepeatedOptional =
  _test_functional_isParameters("ArrayRepeatedOptional")(ArrayRepeatedOptional)(
    (p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) =>
      typia.functional.isParameters(p),
  );
