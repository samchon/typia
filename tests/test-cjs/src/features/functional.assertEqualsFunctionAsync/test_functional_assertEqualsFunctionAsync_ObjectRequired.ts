import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsFunctionAsync_ObjectRequired =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectRequired",
    )(ObjectRequired)((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
      typia.functional.assertEqualsFunction(p),
    );
