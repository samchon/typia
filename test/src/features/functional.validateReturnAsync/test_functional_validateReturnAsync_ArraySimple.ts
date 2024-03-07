import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateReturnAsync_ArraySimple =
  _test_functional_validateReturnAsync("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => Promise<ArraySimple>) =>
      typia.functional.validateReturn(p),
  );
