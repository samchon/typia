import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_isParametersAsync_ArrayAny =
  _test_functional_isParametersAsync("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => Promise<ArrayAny>) =>
      typia.functional.isParameters(p),
  );
