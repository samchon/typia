import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateReturn_TypeTagLength = (): void =>
  _test_functional_validateReturn("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.validateReturn(p),
  );
