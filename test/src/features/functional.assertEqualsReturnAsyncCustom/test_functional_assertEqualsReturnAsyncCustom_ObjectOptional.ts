import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectOptional =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
