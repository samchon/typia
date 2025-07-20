import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_equalsFunction_TypeTagArray = (): void =>
  _test_functional_equalsFunction("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.equalsFunction(p),
  );
