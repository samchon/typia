import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateParameters_ArraySimple =
  _test_functional_validateParameters("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.validateParameters(p),
  );
