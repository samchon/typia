import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_assertReturnAsyncCustom_ObjectHttpFormData =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectHttpFormData")(
      ObjectHttpFormData,
    )((p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
