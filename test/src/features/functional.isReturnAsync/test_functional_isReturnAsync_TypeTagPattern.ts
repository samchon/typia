import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_isReturnAsync_TypeTagPattern =
  _test_functional_isReturnAsync("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.isReturn(p),
  );
