import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectHttpArray = _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)