import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectOptional =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectOptional",
  )(ObjectOptional)((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
