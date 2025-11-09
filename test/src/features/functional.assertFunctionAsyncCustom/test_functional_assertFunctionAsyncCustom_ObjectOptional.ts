import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertFunctionAsyncCustom_ObjectOptional =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ObjectOptional")(
      ObjectOptional,
    )((p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
