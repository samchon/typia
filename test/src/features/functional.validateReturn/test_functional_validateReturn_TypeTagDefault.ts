import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateReturn_TypeTagDefault = (): void =>
  _test_functional_validateReturn("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => TypeTagDefault) =>
      typia.functional.validateReturn(p),
  );
