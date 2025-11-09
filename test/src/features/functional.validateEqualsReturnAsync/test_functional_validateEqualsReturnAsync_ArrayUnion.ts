import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateEqualsReturnAsync_ArrayUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ArrayUnion")(ArrayUnion)(
      (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
        typia.functional.validateEqualsReturn(p),
    );
