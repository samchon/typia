import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateReturn_TypeTagMatrix = (): void =>
  _test_functional_validateReturn("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.validateReturn(p),
  );
