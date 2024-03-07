import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_equalsFunctionAsync_ArrayRecursiveUnionImplicit =
  _test_functional_equalsFunctionAsync("ArrayRecursiveUnionImplicit")(
    ArrayRecursiveUnionImplicit,
  )(
    (
      p: (
        input: ArrayRecursiveUnionImplicit,
      ) => Promise<ArrayRecursiveUnionImplicit>,
    ) => typia.functional.equalsFunction(p),
  );
