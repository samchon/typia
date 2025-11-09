import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertReturnAsyncCustom_ObjectDescription =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectDescription")(
      ObjectDescription,
    )((p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
