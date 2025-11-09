import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectDescription =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectDescription",
    )(ObjectDescription)(
      (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
