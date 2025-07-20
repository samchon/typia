import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_equalsReturnAsync_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ArrayMatrix")(ArrayMatrix)(
      (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
        typia.functional.equalsReturn(p),
    );
