import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertParametersAsyncCustom_ObjectUndefined =
  _test_functional_assertParametersAsync(CustomGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
