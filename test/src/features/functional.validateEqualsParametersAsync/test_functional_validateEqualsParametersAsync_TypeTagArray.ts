import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateEqualsParametersAsync_TypeTagArray =
  _test_functional_validateEqualsParametersAsync("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.validateEqualsParameters(p),
  );
