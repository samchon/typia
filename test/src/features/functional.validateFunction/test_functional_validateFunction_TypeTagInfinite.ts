import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_validateFunction_TypeTagInfinite =
  _test_functional_validateFunction("TypeTagInfinite")(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.validateFunction(p),
  );
