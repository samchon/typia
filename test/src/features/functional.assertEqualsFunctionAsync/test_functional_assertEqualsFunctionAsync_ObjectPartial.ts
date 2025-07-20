import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsFunctionAsync_ObjectPartial =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ObjectPartial")(
      ObjectPartial,
    )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.assertEqualsFunction(p),
    );
