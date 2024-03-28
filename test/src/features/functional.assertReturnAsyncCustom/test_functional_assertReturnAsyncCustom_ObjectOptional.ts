import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertReturnAsyncCustom_ObjectOptional =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
