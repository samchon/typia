import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_isParametersAsync_ArraySimple =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ArraySimple")(ArraySimple)(
      (p: (input: ArraySimple) => Promise<ArraySimple>) =>
        typia.functional.isParameters(p),
    );
