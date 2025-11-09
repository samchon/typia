import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertReturnCustom_ClassNonPublic = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )((p: (input: ClassNonPublic) => ClassNonPublic) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
