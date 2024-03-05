import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateFunction_TypeTagObjectUnion =
  _test_functional_validateFunction("TypeTagObjectUnion")(TypeTagObjectUnion)(
    (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
      typia.functional.validateFunction(p),
  );
