import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateFunctionAsync_ArraySimple =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ArraySimple")(ArraySimple)(
      (p: (input: ArraySimple) => Promise<ArraySimple>) =>
        typia.functional.validateFunction(p),
    );
