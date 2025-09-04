import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_validateReturn_ArrayAny = (): void =>
  _test_functional_validateReturn("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => ArrayAny) => typia.functional.validateReturn(p),
  );
