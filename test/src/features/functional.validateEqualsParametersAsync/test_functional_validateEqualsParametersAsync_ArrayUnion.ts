import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateEqualsParametersAsync_ArrayUnion =
  _test_functional_validateEqualsParametersAsync("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.validateEqualsParameters(p),
  );
