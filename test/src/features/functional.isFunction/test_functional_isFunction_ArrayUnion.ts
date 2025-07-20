import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_isFunction_ArrayUnion = (): void =>
  _test_functional_isFunction("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.isFunction(p),
  );
