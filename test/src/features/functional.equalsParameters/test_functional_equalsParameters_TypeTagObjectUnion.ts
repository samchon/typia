import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_equalsParameters_TypeTagObjectUnion =
  _test_functional_equalsParameters("TypeTagObjectUnion")(TypeTagObjectUnion)(
    (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
      typia.functional.equalsParameters(p),
  );
