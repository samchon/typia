import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectGeneric =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectGeneric",
  )(ObjectGeneric)((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
