import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertFunctionCustom_ClassNonPublic =
  _test_functional_assertFunction(CustomGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )((p: (input: ClassNonPublic) => ClassNonPublic) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
