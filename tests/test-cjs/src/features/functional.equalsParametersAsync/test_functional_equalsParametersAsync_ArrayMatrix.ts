import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_equalsParametersAsync_ArrayMatrix =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ArrayMatrix")(ArrayMatrix)(
      (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
        typia.functional.equalsParameters(p),
    );
