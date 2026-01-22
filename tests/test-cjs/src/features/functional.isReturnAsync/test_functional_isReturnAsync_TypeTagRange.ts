import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_isReturnAsync_TypeTagRange = (): Promise<void> =>
  _test_functional_isReturnAsync("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.isReturn(p),
  );
