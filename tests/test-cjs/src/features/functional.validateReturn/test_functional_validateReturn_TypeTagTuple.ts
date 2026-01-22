import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateReturn_TypeTagTuple = (): void =>
  _test_functional_validateReturn("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.validateReturn(p),
  );
