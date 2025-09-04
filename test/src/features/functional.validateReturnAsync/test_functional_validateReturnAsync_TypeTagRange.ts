import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateReturnAsync_TypeTagRange =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("TypeTagRange")(TypeTagRange)(
      (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
        typia.functional.validateReturn(p),
    );
