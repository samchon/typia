import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectRequired =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
