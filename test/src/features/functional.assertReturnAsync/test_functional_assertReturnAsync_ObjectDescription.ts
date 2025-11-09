import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertReturnAsync_ObjectDescription =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectDescription")(
      ObjectDescription,
    )((p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.assertReturn(p),
    );
