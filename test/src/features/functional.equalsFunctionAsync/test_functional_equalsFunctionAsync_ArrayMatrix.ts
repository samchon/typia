import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_equalsFunctionAsync_ArrayMatrix =
  _test_functional_equalsFunctionAsync("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      typia.functional.equalsFunction(p),
  );
