import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateFunctionAsync_TypeTagTuple =
  _test_functional_validateFunctionAsync("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
      typia.functional.validateFunction(p),
  );
