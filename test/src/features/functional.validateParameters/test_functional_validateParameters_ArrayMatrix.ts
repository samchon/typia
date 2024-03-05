import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateParameters_ArrayMatrix =
  _test_functional_validateParameters("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.validateParameters(p),
  );
