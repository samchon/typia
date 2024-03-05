import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_validateParameters_ArrayRepeatedOptional =
  _test_functional_validateParameters("ArrayRepeatedOptional")(
    ArrayRepeatedOptional,
  )((p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) =>
    typia.functional.validateParameters(p),
  );
