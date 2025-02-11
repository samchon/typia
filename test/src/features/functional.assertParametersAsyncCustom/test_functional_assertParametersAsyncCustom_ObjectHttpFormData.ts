import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_assertParametersAsyncCustom_ObjectHttpFormData =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ObjectHttpFormData",
  )(ObjectHttpFormData)(
    (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
