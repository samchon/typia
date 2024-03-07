import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateEqualsReturnAsync_TypeTagObjectUnion =
  _test_functional_validateEqualsReturnAsync("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
    typia.functional.validateEqualsReturn(p),
  );
