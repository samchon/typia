import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertReturnAsyncCustom_ObjectSimple =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
