import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_validateReturn_TypeTagInfinite =
  _test_functional_validateReturn("TypeTagInfinite")(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.validateReturn(p),
  );
