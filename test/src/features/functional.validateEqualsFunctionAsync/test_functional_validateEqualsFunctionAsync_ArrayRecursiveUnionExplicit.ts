import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateEqualsFunctionAsync_ArrayRecursiveUnionExplicit =
  _test_functional_validateEqualsFunctionAsync("ArrayRecursiveUnionExplicit")(
    ArrayRecursiveUnionExplicit,
  )(
    (
      p: (
        input: ArrayRecursiveUnionExplicit,
      ) => Promise<ArrayRecursiveUnionExplicit>,
    ) => typia.functional.validateEqualsFunction(p),
  );
