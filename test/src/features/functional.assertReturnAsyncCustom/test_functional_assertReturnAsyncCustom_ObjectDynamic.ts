import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_assertReturnAsyncCustom_ObjectDynamic =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectDynamic")(
    ObjectDynamic,
  )((p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
