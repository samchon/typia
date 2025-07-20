import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_validateParameters_ArrayRepeatedUnion = (): void =>
  _test_functional_validateParameters("ArrayRepeatedUnion")(ArrayRepeatedUnion)(
    (p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) =>
      typia.functional.validateParameters(p),
  );
