import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateReturn_TypeTagArray =
  _test_functional_validateReturn("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.validateReturn(p),
  );
