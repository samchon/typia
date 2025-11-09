import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertEqualsParametersAsync_TypeTagObjectUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "TypeTagObjectUnion",
    )(TypeTagObjectUnion)(
      (p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
        typia.functional.assertEqualsParameters(p),
    );
