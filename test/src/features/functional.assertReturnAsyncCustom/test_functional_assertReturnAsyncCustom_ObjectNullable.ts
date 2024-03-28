import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertReturnAsyncCustom_ObjectNullable =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
