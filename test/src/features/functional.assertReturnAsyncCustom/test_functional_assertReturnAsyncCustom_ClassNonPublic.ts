import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertReturnAsyncCustom_ClassNonPublic =
  _test_functional_assertReturnAsync(CustomGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )((p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
