import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_validateParameters_TypeTagInfinite =
  _test_functional_validateParameters("TypeTagInfinite")(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.validateParameters(p),
  );
