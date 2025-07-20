import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateReturnAsync_ArrayRecursiveUnionExplicit =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ArrayRecursiveUnionExplicit")(
      ArrayRecursiveUnionExplicit,
    )(
      (
        p: (
          input: ArrayRecursiveUnionExplicit,
        ) => Promise<ArrayRecursiveUnionExplicit>,
      ) => typia.functional.validateReturn(p),
    );
