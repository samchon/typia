import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_validateParameters_ArrayRepeatedRequired =
  (): void =>
    _test_functional_validateParameters("ArrayRepeatedRequired")(
      ArrayRepeatedRequired,
    )((p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
      typia.functional.validateParameters(p),
    );
