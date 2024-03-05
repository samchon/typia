import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateEqualsReturn_TypeTagArray =
  _test_functional_validateEqualsReturn("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.validateEqualsReturn(p),
  );
