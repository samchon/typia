import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_validateReturnAsync_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("TypeTagInfinite")(TypeTagInfinite)(
      (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
        typia.functional.validateReturn(p),
    );
