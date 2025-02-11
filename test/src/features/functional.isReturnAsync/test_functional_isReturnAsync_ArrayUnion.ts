import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_isReturnAsync_ArrayUnion =
  _test_functional_isReturnAsync("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.isReturn(p),
  );
