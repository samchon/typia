import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertFunctionAsyncCustom_ClassNonPublic =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ClassNonPublic")(
      ClassNonPublic,
    )((p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
