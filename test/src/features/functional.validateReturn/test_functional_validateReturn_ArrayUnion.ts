import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateReturn_ArrayUnion =
  _test_functional_validateReturn("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.validateReturn(p),
  );
