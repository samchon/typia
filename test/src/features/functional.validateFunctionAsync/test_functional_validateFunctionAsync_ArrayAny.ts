import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_validateFunctionAsync_ArrayAny =
  _test_functional_validateFunctionAsync("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => Promise<ArrayAny>) =>
      typia.functional.validateFunction(p),
  );
