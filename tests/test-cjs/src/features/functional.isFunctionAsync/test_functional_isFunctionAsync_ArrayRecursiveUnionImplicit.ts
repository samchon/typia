import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_isFunctionAsync_ArrayRecursiveUnionImplicit =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ArrayRecursiveUnionImplicit")(
      ArrayRecursiveUnionImplicit,
    )(
      (
        p: (
          input: ArrayRecursiveUnionImplicit,
        ) => Promise<ArrayRecursiveUnionImplicit>,
      ) => typia.functional.isFunction(p),
    );
