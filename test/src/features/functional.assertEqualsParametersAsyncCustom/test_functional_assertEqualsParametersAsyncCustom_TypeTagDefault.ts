import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagDefault =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TypeTagDefault",
  )(TypeTagDefault)((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
