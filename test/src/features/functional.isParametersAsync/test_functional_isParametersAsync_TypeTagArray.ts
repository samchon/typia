import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_isParametersAsync_TypeTagArray =
  _test_functional_isParametersAsync("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.isParameters(p),
  );
