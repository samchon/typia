import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertFunctionAsync_ObjectPartial =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectPartial")(
      ObjectPartial,
    )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.assertFunction(p),
    );
