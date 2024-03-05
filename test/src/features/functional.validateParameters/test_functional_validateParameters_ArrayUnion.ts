import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateParameters_ArrayUnion =
  _test_functional_validateParameters("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.validateParameters(p),
  );
