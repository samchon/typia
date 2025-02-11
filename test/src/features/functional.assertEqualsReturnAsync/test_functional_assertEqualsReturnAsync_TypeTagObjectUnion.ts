import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertEqualsReturnAsync_TypeTagObjectUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "TypeTagObjectUnion",
  )(TypeTagObjectUnion)(
    (p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
      typia.functional.assertEqualsReturn(p),
  );
