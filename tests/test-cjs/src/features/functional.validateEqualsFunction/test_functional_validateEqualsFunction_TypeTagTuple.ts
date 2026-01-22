import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateEqualsFunction_TypeTagTuple = (): void =>
  _test_functional_validateEqualsFunction("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.validateEqualsFunction(p),
  );
