import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertParametersAsyncCustom_ClassNonPublic =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ClassNonPublic")(
      ClassNonPublic,
    )((p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
