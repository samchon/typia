import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectHttpFormData = _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)