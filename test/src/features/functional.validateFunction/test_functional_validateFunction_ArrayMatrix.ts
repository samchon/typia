import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateFunction_ArrayMatrix =
  _test_functional_validateFunction("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.validateFunction(p),
  );
