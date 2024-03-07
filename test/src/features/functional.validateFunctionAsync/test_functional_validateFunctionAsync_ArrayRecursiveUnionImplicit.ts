import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateFunctionAsync_ArrayRecursiveUnionImplicit =
  _test_functional_validateFunctionAsync("ArrayRecursiveUnionImplicit")(
    ArrayRecursiveUnionImplicit,
  )(
    (
      p: (
        input: ArrayRecursiveUnionImplicit,
      ) => Promise<ArrayRecursiveUnionImplicit>,
    ) => typia.functional.validateFunction(p),
  );
