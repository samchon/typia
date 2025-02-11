import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagMatrix =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TypeTagMatrix",
  )(TypeTagMatrix)((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
