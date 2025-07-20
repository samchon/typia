import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateEqualsFunctionAsync_TypeTagTuple =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("TypeTagTuple")(TypeTagTuple)(
      (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
        typia.functional.validateEqualsFunction(p),
    );
