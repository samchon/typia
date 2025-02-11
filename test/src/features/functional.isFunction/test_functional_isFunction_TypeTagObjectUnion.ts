import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_isFunction_TypeTagObjectUnion =
  _test_functional_isFunction("TypeTagObjectUnion")(TypeTagObjectUnion)(
    (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
      typia.functional.isFunction(p),
  );
