import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_validateEqualsFunction_TypeTagInfinite =
  _test_functional_validateEqualsFunction("TypeTagInfinite")(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.validateEqualsFunction(p),
  );
