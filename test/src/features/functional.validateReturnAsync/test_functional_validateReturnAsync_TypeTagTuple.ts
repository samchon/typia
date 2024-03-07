import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateReturnAsync_TypeTagTuple =
  _test_functional_validateReturnAsync("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
      typia.functional.validateReturn(p),
  );
