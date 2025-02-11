import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertReturnAsyncCustom_ObjectHttpNullable =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
