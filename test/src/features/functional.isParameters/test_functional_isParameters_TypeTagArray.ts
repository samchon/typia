import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_isParameters_TypeTagArray = (): void =>
  _test_functional_isParameters("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.isParameters(p),
  );
