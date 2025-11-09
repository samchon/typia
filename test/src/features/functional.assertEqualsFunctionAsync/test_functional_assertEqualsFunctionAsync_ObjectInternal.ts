import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsFunctionAsync_ObjectInternal =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectInternal",
    )(ObjectInternal)((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.assertEqualsFunction(p),
    );
