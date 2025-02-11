import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_isParametersAsync_ArrayUnion =
  _test_functional_isParametersAsync("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.isParameters(p),
  );
