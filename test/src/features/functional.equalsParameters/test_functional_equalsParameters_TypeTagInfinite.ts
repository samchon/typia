import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_equalsParameters_TypeTagInfinite =
  _test_functional_equalsParameters("TypeTagInfinite")(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.equalsParameters(p),
  );
