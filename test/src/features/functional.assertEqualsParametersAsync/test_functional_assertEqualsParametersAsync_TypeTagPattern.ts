import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_TypeTagPattern =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TypeTagPattern",
  )(TypeTagPattern)((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertEqualsParameters(p),
  );
