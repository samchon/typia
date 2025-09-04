import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsParametersAsync_TypeTagNaN =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)("TypeTagNaN")(
      TypeTagNaN,
    )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.assertEqualsParameters(p),
    );
