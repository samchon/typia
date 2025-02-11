import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_isFunction_ArrayMatrix =
  _test_functional_isFunction("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) => typia.functional.isFunction(p),
  );
