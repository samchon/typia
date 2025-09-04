import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_isReturnAsync_ArrayMatrix = (): Promise<void> =>
  _test_functional_isReturnAsync("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      typia.functional.isReturn(p),
  );
