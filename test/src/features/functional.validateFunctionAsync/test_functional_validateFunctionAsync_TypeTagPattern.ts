import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateFunctionAsync_TypeTagPattern =
  _test_functional_validateFunctionAsync("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.validateFunction(p),
  );
