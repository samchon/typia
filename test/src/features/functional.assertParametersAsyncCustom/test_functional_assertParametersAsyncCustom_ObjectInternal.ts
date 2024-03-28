import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertParametersAsyncCustom_ObjectInternal =
  _test_functional_assertParametersAsync(CustomGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
