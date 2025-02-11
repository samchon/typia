import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_equalsParametersAsync_TypeTagArray =
  _test_functional_equalsParametersAsync("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.equalsParameters(p),
  );
