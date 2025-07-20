import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_equalsReturnAsync_ArrayRecursiveUnionExplicit =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ArrayRecursiveUnionExplicit")(
      ArrayRecursiveUnionExplicit,
    )(
      (
        p: (
          input: ArrayRecursiveUnionExplicit,
        ) => Promise<ArrayRecursiveUnionExplicit>,
      ) => typia.functional.equalsReturn(p),
    );
