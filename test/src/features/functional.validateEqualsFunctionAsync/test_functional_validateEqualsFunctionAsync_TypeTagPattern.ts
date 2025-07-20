import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateEqualsFunctionAsync_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("TypeTagPattern")(
      TypeTagPattern,
    )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.validateEqualsFunction(p),
    );
