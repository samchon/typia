import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_equalsFunction_TypeTagTuple = (): void =>
  _test_functional_equalsFunction("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.equalsFunction(p),
  );
