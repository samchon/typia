import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_equalsParametersAsync_ArraySimple =
  _test_functional_equalsParametersAsync("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => Promise<ArraySimple>) =>
      typia.functional.equalsParameters(p),
  );
