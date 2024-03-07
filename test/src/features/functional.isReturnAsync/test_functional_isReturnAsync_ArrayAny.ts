import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_isReturnAsync_ArrayAny =
  _test_functional_isReturnAsync("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => Promise<ArrayAny>) => typia.functional.isReturn(p),
  );
