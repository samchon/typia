import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateEqualsReturn_TypeTagObjectUnion =
  _test_functional_validateEqualsReturn("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
    typia.functional.validateEqualsReturn(p),
  );
