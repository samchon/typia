import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertReturnAsyncCustom_ObjectDate =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectDate")(
    ObjectDate,
  )((p: (input: ObjectDate) => Promise<ObjectDate>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
