import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectGeneric =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
