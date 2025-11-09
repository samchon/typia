import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateParametersAsync_ArraySimple =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ArraySimple")(ArraySimple)(
      (p: (input: ArraySimple) => Promise<ArraySimple>) =>
        typia.functional.validateParameters(p),
    );
