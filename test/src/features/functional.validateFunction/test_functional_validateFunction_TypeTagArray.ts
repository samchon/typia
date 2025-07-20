import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateFunction_TypeTagArray = (): void =>
  _test_functional_validateFunction("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.validateFunction(p),
  );
