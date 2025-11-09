import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_equalsReturnAsync_ArrayRecursiveUnionImplicit =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ArrayRecursiveUnionImplicit")(
      ArrayRecursiveUnionImplicit,
    )(
      (
        p: (
          input: ArrayRecursiveUnionImplicit,
        ) => Promise<ArrayRecursiveUnionImplicit>,
      ) => typia.functional.equalsReturn(p),
    );
