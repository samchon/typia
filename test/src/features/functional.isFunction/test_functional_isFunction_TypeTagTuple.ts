import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_isFunction_TypeTagTuple = (): void =>
  _test_functional_isFunction("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.isFunction(p),
  );
