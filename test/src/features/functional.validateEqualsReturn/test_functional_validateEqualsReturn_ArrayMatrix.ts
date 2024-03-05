import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateEqualsReturn_ArrayMatrix =
  _test_functional_validateEqualsReturn("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.validateEqualsReturn(p),
  );
