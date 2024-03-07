import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateEqualsReturnAsync_ArraySimple =
  _test_functional_validateEqualsReturnAsync("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => Promise<ArraySimple>) =>
      typia.functional.validateEqualsReturn(p),
  );
