import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectNullable =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectNullable",
  )(ObjectNullable)((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
