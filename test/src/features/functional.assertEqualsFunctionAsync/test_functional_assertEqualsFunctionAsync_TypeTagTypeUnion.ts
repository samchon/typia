import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_assertEqualsFunctionAsync_TypeTagTypeUnion =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "TypeTagTypeUnion",
  )(TypeTagTypeUnion)(
    (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
      typia.functional.assertEqualsFunction(p),
  );
