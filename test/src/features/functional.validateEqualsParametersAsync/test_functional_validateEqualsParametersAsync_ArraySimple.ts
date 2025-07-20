import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateEqualsParametersAsync_ArraySimple =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ArraySimple")(ArraySimple)(
      (p: (input: ArraySimple) => Promise<ArraySimple>) =>
        typia.functional.validateEqualsParameters(p),
    );
