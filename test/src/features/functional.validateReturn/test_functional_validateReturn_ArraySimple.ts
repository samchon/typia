import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateReturn_ArraySimple =
  _test_functional_validateReturn("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.validateReturn(p),
  );
