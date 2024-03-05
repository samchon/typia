import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_equalsFunction_TypeTagInfinite =
  _test_functional_equalsFunction("TypeTagInfinite")(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.equalsFunction(p),
  );
