import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_functional_validateReturn_ArrayMatrix = (): void =>
  _test_functional_validateReturn("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      typia.functional.validateReturn(p),
  );
