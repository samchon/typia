import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateFunctionAsync_ArrayUnion =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ArrayUnion")(ArrayUnion)(
      (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
        typia.functional.validateFunction(p),
    );
