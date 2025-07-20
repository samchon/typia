import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateEqualsFunctionAsync_ArrayUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ArrayUnion")(ArrayUnion)(
      (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
        typia.functional.validateEqualsFunction(p),
    );
