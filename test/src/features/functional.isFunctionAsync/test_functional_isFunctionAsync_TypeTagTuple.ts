import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_isFunctionAsync_TypeTagTuple =
  _test_functional_isFunctionAsync("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
      typia.functional.isFunction(p),
  );
