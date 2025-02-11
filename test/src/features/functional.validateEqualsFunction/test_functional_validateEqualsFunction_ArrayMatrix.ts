import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateEqualsFunction_ArrayMatrix =
  _test_functional_validateEqualsFunction("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.validateEqualsFunction(p),
  );
