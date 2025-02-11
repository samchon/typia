import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertParametersAsyncCustom_TypeTagObjectUnion =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "TypeTagObjectUnion",
  )(TypeTagObjectUnion)(
    (p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
