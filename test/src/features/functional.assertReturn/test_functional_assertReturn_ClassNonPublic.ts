import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertReturn_ClassNonPublic =
  _test_functional_assertReturn(TypeGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )((p: (input: ClassNonPublic) => ClassNonPublic) =>
    typia.functional.assertReturn(p),
  );
