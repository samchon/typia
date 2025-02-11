import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertParametersAsyncCustom_ObjectOptional =
  _test_functional_assertParametersAsync(CustomGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
