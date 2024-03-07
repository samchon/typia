import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateFunctionAsync_ArrayRecursiveUnionExplicit =
  _test_functional_validateFunctionAsync("ArrayRecursiveUnionExplicit")(
    ArrayRecursiveUnionExplicit,
  )(
    (
      p: (
        input: ArrayRecursiveUnionExplicit,
      ) => Promise<ArrayRecursiveUnionExplicit>,
    ) => typia.functional.validateFunction(p),
  );
