import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_validateEqualsFunctionAsync_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("TypeTagInfinite")(
      TypeTagInfinite,
    )((p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
      typia.functional.validateEqualsFunction(p),
    );
