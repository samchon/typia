import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_isReturnAsync_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_isReturnAsync("TypeTagInfinite")(TypeTagInfinite)(
      (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
        typia.functional.isReturn(p),
    );
