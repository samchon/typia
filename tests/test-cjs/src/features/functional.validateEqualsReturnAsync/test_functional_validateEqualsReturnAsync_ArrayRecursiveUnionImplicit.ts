import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateEqualsReturnAsync_ArrayRecursiveUnionImplicit =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ArrayRecursiveUnionImplicit")(
      ArrayRecursiveUnionImplicit,
    )(
      (
        p: (
          input: ArrayRecursiveUnionImplicit,
        ) => Promise<ArrayRecursiveUnionImplicit>,
      ) => typia.functional.validateEqualsReturn(p),
    );
