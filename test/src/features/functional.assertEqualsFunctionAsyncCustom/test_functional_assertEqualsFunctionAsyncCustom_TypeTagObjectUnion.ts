import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagObjectUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TypeTagObjectUnion",
  )(TypeTagObjectUnion)(
    (p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
