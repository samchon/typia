import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectSimple =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
