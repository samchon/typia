import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ObjectTuple")(
      ObjectTuple,
    )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
