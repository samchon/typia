import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_TypeTagDefault =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TypeTagDefault",
  )(TypeTagDefault)((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.assertEqualsParameters(p),
  );
