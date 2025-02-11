import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateEqualsFunction_TypeTagArray =
  _test_functional_validateEqualsFunction("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.validateEqualsFunction(p),
  );
