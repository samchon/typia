import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateEqualsFunctionAsync_TypeTagLength =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("TypeTagLength")(
      TypeTagLength,
    )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      typia.functional.validateEqualsFunction(p),
    );
