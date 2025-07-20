import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateReturnAsync_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("TypeTagPattern")(TypeTagPattern)(
      (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
        typia.functional.validateReturn(p),
    );
