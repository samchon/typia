import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateEqualsReturnAsync_ArrayRecursiveUnionExplicit =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ArrayRecursiveUnionExplicit")(
      ArrayRecursiveUnionExplicit,
    )(
      (
        p: (
          input: ArrayRecursiveUnionExplicit,
        ) => Promise<ArrayRecursiveUnionExplicit>,
      ) => typia.functional.validateEqualsReturn(p),
    );
