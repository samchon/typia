import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertParametersAsync_ObjectDescription =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ObjectDescription")(
      ObjectDescription,
    )((p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.assertParameters(p),
    );
