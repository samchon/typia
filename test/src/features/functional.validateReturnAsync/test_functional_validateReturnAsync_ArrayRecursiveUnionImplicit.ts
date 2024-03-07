import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateReturnAsync_ArrayRecursiveUnionImplicit =
  _test_functional_validateReturnAsync("ArrayRecursiveUnionImplicit")(
    ArrayRecursiveUnionImplicit,
  )(
    (
      p: (
        input: ArrayRecursiveUnionImplicit,
      ) => Promise<ArrayRecursiveUnionImplicit>,
    ) => typia.functional.validateReturn(p),
  );
