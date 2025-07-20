import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertParametersAsync_ObjectInternal =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ObjectInternal")(
      ObjectInternal,
    )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.assertParameters(p),
    );
