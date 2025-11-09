import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectHttpFormData = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)