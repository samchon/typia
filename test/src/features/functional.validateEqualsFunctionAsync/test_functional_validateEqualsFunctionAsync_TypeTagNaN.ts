import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateEqualsFunctionAsync_TypeTagNaN =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("TypeTagNaN")(TypeTagNaN)(
      (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
        typia.functional.validateEqualsFunction(p),
    );
