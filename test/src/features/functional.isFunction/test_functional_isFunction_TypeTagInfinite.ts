import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_isFunction_TypeTagInfinite =
  _test_functional_isFunction("TypeTagInfinite")(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.isFunction(p),
  );
