import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertFunction_ClassNonPublic =
  _test_functional_assertFunction(TypeGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )((p: (input: ClassNonPublic) => ClassNonPublic) =>
    typia.functional.assertFunction(p),
  );
