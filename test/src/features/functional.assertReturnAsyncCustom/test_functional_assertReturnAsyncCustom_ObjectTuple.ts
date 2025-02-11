import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertReturnAsyncCustom_ObjectTuple =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
