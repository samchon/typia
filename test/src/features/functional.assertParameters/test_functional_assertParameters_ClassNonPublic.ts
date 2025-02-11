import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_assertParameters_ClassNonPublic =
  _test_functional_assertParameters(TypeGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )((p: (input: ClassNonPublic) => ClassNonPublic) =>
    typia.functional.assertParameters(p),
  );
