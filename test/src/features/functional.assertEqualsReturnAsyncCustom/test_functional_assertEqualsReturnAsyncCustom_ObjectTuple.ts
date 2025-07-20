import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectTuple")(
      ObjectTuple,
    )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
